/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import cssnano from 'cssnano';
import postcss from 'postcss';
import { toCamelCase, toKebabCase } from '../../../scripts/stringUtils.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATHS = {
  PRIMITIVE_JSON: path.resolve(__dirname, '../src/raw/primitives.json'),
  SEMANTICS_JSON: path.resolve(__dirname, '../src/raw/semantics.json'),
  PRIMITIVES_DIR: path.resolve(__dirname, '../src/primitives'),
  SEMANTICS_DIR: path.resolve(__dirname, '../src/semantics'),
  CSS_DIR: path.resolve(__dirname, '../dist/css'),
};

const SKIP_KEYS = ['$themes', '$metadata'];

/** 숫자로 변환 가능한 값은 숫자로, 아니면 문자열 그대로 반환 */
const parseValue = (value) => {
  const num = Number(value);
  return !isNaN(num) ? num : value;
};

/**
 * 피그마 토큰 형식에서 실제 값만 꺼내서 반환
 * { value: '#fff', type: 'color' } → '#fff'
 * 중첩된 객체는 재귀로 처리
 */
const extractValues = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if ('value' in obj && 'type' in obj) {
    return parseValue(obj.value);
  }

  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    result[key] = extractValues(val);
  }
  return result;
};

/** spacing, radius는 px 단위 적용 */
const CATEGORIES_WITH_PX = new Set(['spacing', 'radius']);

/** font-size: 36px 미만은 rem 사용, 나머지는 px 사용 */
const BASE_FONT_SIZE = 16;
const REM_THRESHOLD = 36;

/** font-family는 문자열로 */
const CATEGORIES_WITH_QUOTES = new Set(['font-family']);

/**
 * 추출된 토큰 객체를 CSS 커스텀 프로퍼티 목록으로 변환
 * { primary: { 50: '#fff' } } → ['--color-primary-50: #fff']
 */
const flattenToCssVars = (obj, prefix, rootCategory) => {
  const vars = [];
  for (const [key, value] of Object.entries(obj)) {
    const varName = `${prefix}-${toKebabCase(String(key))}`;
    if (typeof value === 'object' && value !== null) {
      vars.push(...flattenToCssVars(value, varName, rootCategory));
    } else {
      const needsPx =
        CATEGORIES_WITH_PX.has(rootCategory) && typeof value === 'number';
      const needsQuotes = CATEGORIES_WITH_QUOTES.has(rootCategory);
      const isFontSize =
        rootCategory === 'font-size' && typeof value === 'number';
      const cssValue = needsPx
        ? `${value}px`
        : isFontSize
          ? value < REM_THRESHOLD
            ? `${value / BASE_FONT_SIZE}rem`
            : `${value}px`
          : needsQuotes
            ? `'${String(value)}'`
            : String(value);
      vars.push(`  ${varName}: ${cssValue};`);
    }
  }
  return vars;
};

const generateTokens = async () => {
  try {
    await fs.mkdir(PATHS.PRIMITIVES_DIR, { recursive: true });
    await fs.mkdir(PATHS.SEMANTICS_DIR, { recursive: true });
    await fs.mkdir(PATHS.CSS_DIR, { recursive: true });

    const raw = await fs.readFile(PATHS.PRIMITIVE_JSON, 'utf8');
    const json = JSON.parse(raw);

    const tsLines = [];
    const cssVars = [];

    for (const [key, value] of Object.entries(json)) {
      if (SKIP_KEYS.includes(key)) {
        continue;
      }

      const exportName = toCamelCase(key);
      const rootCategory = toKebabCase(exportName);
      const extracted = extractValues(value);

      // TS 상수 생성
      const serialized = JSON.stringify(extracted, null, 2);
      tsLines.push(`export const ${exportName} = ${serialized} as const;`);

      // CSS 변수 생성
      cssVars.push(
        ...flattenToCssVars(extracted, `--${rootCategory}`, rootCategory),
      );
    }

    // primitive.ts 저장
    const tsContent = tsLines.join('\n\n') + '\n';
    await fs.writeFile(
      path.join(PATHS.PRIMITIVES_DIR, 'primitives.ts'),
      tsContent,
    );

    // @font-face 선언
    const fontFace = [100, 200, 300, 400, 500, 600, 700, 800, 900]
      .map((weight) => {
        const names = {
          100: '1Thin',
          200: '2ExtraLight',
          300: '3Light',
          400: '4Regular',
          500: '5Medium',
          600: '6SemiBold',
          700: '7Bold',
          800: '8ExtraBold',
          900: '9Black',
        };
        return `@font-face {\n  font-family: 'A2z';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2601-6@1.0/에이투지체-${names[weight]}.woff2') format('woff2');\n  font-weight: ${weight};\n  font-display: swap;\n}`;
      })
      .join('\n');

    // dist/css/ 경로로 primitive.css 저장
    const cssContent = `${fontFace}\n:root {\n${cssVars.join('\n')}\n}\n`;
    const minified = await postcss([cssnano]).process(cssContent, {
      from: undefined,
    });
    await fs.writeFile(path.join(PATHS.CSS_DIR, 'primitive.css'), minified.css);

    // CSS 타입 선언 파일 생성
    await fs.writeFile(
      path.join(PATHS.CSS_DIR, 'primitive.css.d.ts'),
      'declare const styles: string;\nexport default styles;\n',
    );

    // semantics.json → semantic.css 생성
    const semanticsRaw = await fs.readFile(PATHS.SEMANTICS_JSON, 'utf8');
    const semanticsJson = JSON.parse(semanticsRaw);
    const semanticCssVars = [];

    const resolveReference = (value) => {
      // {color.vermilion.500} → var(--color-vermilion-500)
      return value.replace(/\{([^}]+)\}/g, (_, ref) => {
        const varName = ref.split('.').map(toKebabCase).join('-');
        return `var(--${varName})`;
      });
    };

    const flattenSemanticVars = (obj, prefix) => {
      for (const [key, val] of Object.entries(obj)) {
        const varName = `${prefix}-${toKebabCase(String(key))}`;
        if (typeof val === 'object' && val !== null && !('value' in val)) {
          flattenSemanticVars(val, varName);
        } else if ('value' in val) {
          const cssValue = resolveReference(String(val.value));
          semanticCssVars.push(`  ${varName}: ${cssValue};`);
        }
      }
    };

    for (const [key, value] of Object.entries(semanticsJson)) {
      flattenSemanticVars(value, `--${toKebabCase(key)}`);
    }

    const semanticCssContent = `:root {\n${semanticCssVars.join('\n')}\n}\n`;
    const minifiedSemantic = await postcss([cssnano]).process(
      semanticCssContent,
      { from: undefined },
    );
    await fs.writeFile(
      path.join(PATHS.CSS_DIR, 'semantic.css'),
      minifiedSemantic.css,
    );
    await fs.writeFile(
      path.join(PATHS.CSS_DIR, 'semantic.css.d.ts'),
      'declare const styles: string;\nexport default styles;\n',
    );

    // semantics.ts 저장
    const extractSemanticValues = (obj) => {
      if (typeof obj !== 'object' || obj === null) {
        return obj;
      }
      if ('value' in obj) {
        return resolveReference(String(obj.value));
      }
      const result = {};
      for (const [key, val] of Object.entries(obj)) {
        result[key] = extractSemanticValues(val);
      }
      return result;
    };

    const semanticTsLines = [];
    for (const [key, value] of Object.entries(semanticsJson)) {
      const exportName = toCamelCase(key);
      const extracted = extractSemanticValues(value);
      semanticTsLines.push(
        `export const ${exportName} = ${JSON.stringify(extracted, null, 2)} as const;`,
      );
    }
    await fs.writeFile(
      path.join(PATHS.SEMANTICS_DIR, 'semantics.ts'),
      semanticTsLines.join('\n\n') + '\n',
    );

    console.log(`✅ primitives 토큰이 성공적으로 생성되었습니다! (TS + CSS)`);
    console.log(`✅ semantics 토큰이 성공적으로 생성되었습니다! (TS + CSS)`);
  } catch (error) {
    console.error('❌ 토큰 생성 중 에러 발생:', error);
    process.exit(1);
  }
};

generateTokens();
