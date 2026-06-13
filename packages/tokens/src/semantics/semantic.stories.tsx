import type { Meta, StoryObj } from '@storybook/react-vite';
import styles from '../story-ui/story.module.scss';
import { TypoTokenCard } from '../story-ui/TypoTokenCard';
import { color } from './semantics';

const meta: Meta = {
  title: 'Tokens/Semantic',
  tags: ['!autodocs'],
};

export default meta;

const FONT_WEIGHT_LABEL: Record<number, string> = {
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
};

const fw = (value: number) => ({
  primitive: `font-weight/${value}`,
  value,
  label: FONT_WEIGHT_LABEL[value] ?? String(value),
});

const fs = (value: number) => ({ primitive: `font-size/${value}`, value });

const lh = (key: string, value: number) => ({
  key: `line-height/${key}`,
  value,
});

const HEADING_TOKENS = [
  {
    name: 'typo/heading/xl',
    description: '꾸밈요소 등의 매우 큰 강조에 사용됩니다.',
    fontSize: fs(48),
    fontWeight: fw(700),
    lineHeight: lh('140', 1.4),
  },
  {
    name: 'typo/heading/lg',
    description:
      '랜딩페이지·디자인시스템 사이트 등 데스크탑·웹 큰 헤딩에 사용됩니다.',
    fontSize: fs(36),
    fontWeight: fw(700),
    lineHeight: lh('140', 1.4),
  },
  {
    name: 'typo/heading/md',
    description: '화면 메인 헤딩에 사용됩니다.',
    fontSize: fs(24),
    fontWeight: fw(600),
    lineHeight: lh('140', 1.4),
  },
  {
    name: 'typo/heading/sm',
    description: '섹션 메인 강조에 사용됩니다.',
    fontSize: fs(20),
    fontWeight: fw(600),
    lineHeight: lh('140', 1.4),
  },
];

const BODY_TOKENS = [
  {
    name: 'typo/body/md-strong',
    description: '중간 강조 본문 — 데스크탑·태블릿 강조 본문 (예약).',
    fontSize: fs(16),
    fontWeight: fw(600),
    lineHeight: lh('160', 1.6),
  },
  {
    name: 'typo/body/md',
    description: '중간 본문 — 데스크탑·태블릿 일반 본문 (예약).',
    fontSize: fs(16),
    fontWeight: fw(400),
    lineHeight: lh('160', 1.6),
  },
  {
    name: 'typo/body/sm-strong',
    description: '강조 본문에 사용됩니다.',
    fontSize: fs(14),
    fontWeight: fw(600),
    lineHeight: lh('160', 1.6),
  },
  {
    name: 'typo/body/sm',
    description: '안내문에 사용됩니다.',
    fontSize: fs(14),
    fontWeight: fw(400),
    lineHeight: lh('160', 1.6),
  },
];

const LABEL_TOKENS = [
  {
    name: 'typo/label/lg',
    description: '큰 라벨 기본 — 카드 제목·그룹명에 사용됩니다.',
    fontSize: fs(16),
    fontWeight: fw(500),
    lineHeight: lh('100', 1),
    sampleText: '서울 사무실 점심',
  },
  {
    name: 'typo/label/lg-strong',
    description: '큰 라벨 강조 — CTA·빈상태 헤드라인·카운트 강조에 사용됩니다.',
    fontSize: fs(16),
    fontWeight: fw(700),
    lineHeight: lh('100', 1),
    sampleText: '이거 먹을래!',
  },
  {
    name: 'typo/label/md',
    description: '중간 라벨 — 보조 텍스트·인라인 라벨에 사용됩니다.',
    fontSize: fs(14),
    fontWeight: fw(400),
    lineHeight: lh('100', 1),
    sampleText: '먹지추천받기',
  },
  {
    name: 'typo/label/md-strong',
    description:
      '중간 라벨 강조 — 체크박스 라벨, 중간-작은 크기 버튼 라벨에 사용됩니다.',
    fontSize: fs(14),
    fontWeight: fw(600),
    lineHeight: lh('100', 1),
    sampleText: '전체선택',
  },
  {
    name: 'typo/label/sm',
    description: '작은 라벨 강조 — 토글·인라인 액션에 사용됩니다.',
    fontSize: fs(12),
    fontWeight: fw(500),
    lineHeight: lh('100', 1),
    sampleText: '편집',
  },
  {
    name: 'typo/label/sm-strong',
    description: '탭바 라벨 — 단일라인 인터랙티브 강조 (탭바 active/default).',
    fontSize: fs(12),
    fontWeight: fw(700),
    lineHeight: lh('100', 1),
    sampleText: '홈',
  },
];

const CAPTION_TOKENS = [
  {
    name: 'typo/caption/md',
    description: '툴팁 본문에 사용됩니다.',
    fontSize: fs(12),
    fontWeight: fw(400),
    lineHeight: lh('140', 1.4),
    sampleText: '처음 사용하시나요?',
  },
  {
    name: 'typo/caption/sm',
    description: '부가 메타에 사용됩니다 — 카드 부가설명·통계 행 라벨.',
    fontSize: fs(10),
    fontWeight: fw(400),
    lineHeight: lh('140', 1.4),
    sampleText: '백종원 홍콩반점',
  },
];

const SemanticTypographyPage = () => {
  return (
    <div className={styles.semanticPage}>
      <section className={styles.semanticSection}>
        <h2>Heading</h2>
        {HEADING_TOKENS.map((token) => (
          <TypoTokenCard key={token.name} {...token} />
        ))}
      </section>

      <section className={styles.semanticSection}>
        <h2>Body</h2>
        {BODY_TOKENS.map((token) => (
          <TypoTokenCard key={token.name} {...token} />
        ))}
      </section>

      <section className={styles.semanticSection}>
        <h2>Label</h2>
        {LABEL_TOKENS.map((token) => (
          <TypoTokenCard key={token.name} {...token} />
        ))}
      </section>

      <section className={styles.semanticSection}>
        <h2>Caption</h2>
        {CAPTION_TOKENS.map((token) => (
          <TypoTokenCard key={token.name} {...token} />
        ))}
      </section>
    </div>
  );
};

export const Typography: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => <SemanticTypographyPage />,
};

const CATEGORY_ORDER = [
  'overlay',
  'layer',
  'brand',
  'interactive',
  'informative',
  'negative',
  'highlight',
  'neutral',
  'on',
  'placeholder',
  'disabled',
];

const getCategory = (key: string) => {
  const match = CATEGORY_ORDER.find(
    (c) => key === c || key.startsWith(`${c}-`),
  );
  return match ?? key;
};

const primitiveNumber = (value: string): number => {
  const match = value.match(/-(\d+)\)$/);
  return match ? parseInt(match[1]) : 0;
};

const sortTokenEntries = (entries: [string, string][]) =>
  [...entries].sort(([aKey, aVal], [bKey, bVal]) => {
    const catScore = (key: string) => {
      const i = CATEGORY_ORDER.findIndex(
        (c) => key === c || key.startsWith(`${c}-`),
      );
      return i === -1 ? CATEGORY_ORDER.length : i;
    };
    const catDiff = catScore(aKey) - catScore(bKey);
    if (catDiff !== 0) {
      return catDiff;
    }

    return primitiveNumber(aVal) - primitiveNumber(bVal);
  });

const COLOR_GROUPS = [
  {
    key: 'bg',
    title: 'bg',
    tokens: sortTokenEntries(Object.entries(color.bg)),
  },
  {
    key: 'fg',
    title: 'fg',
    tokens: sortTokenEntries(Object.entries(color.fg)),
  },
  {
    key: 'stroke',
    title: 'stroke',
    tokens: sortTokenEntries(Object.entries(color.stroke)),
  },
] as const;

const extractPrimitive = (value: string): string => {
  const match = value.match(/var\(--(.+?)\)/);
  return match ? match[1] : value;
};

const ColorSwatch = ({ group, value }: { group: string; value: string }) => {
  if (group === 'fg') {
    return (
      <div className={styles.colorSwatchFg} style={{ color: value }}>
        Aa
      </div>
    );
  }
  if (group === 'stroke') {
    return (
      <div
        className={styles.colorSwatchStroke}
        style={{ borderColor: value }}
      />
    );
  }
  return <div className={styles.colorSwatch} style={{ background: value }} />;
};

const SemanticColorPage = () => {
  return (
    <div className={styles.semanticPage}>
      {COLOR_GROUPS.map(({ key, title, tokens }) => (
        <section key={key} className={styles.semanticSection}>
          <h2>{title}</h2>
          <table className={styles.colorTable}>
            <thead>
              <tr>
                <th>Swatch</th>
                <th>Token</th>
                <th>Primitives</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map(([name, value], i) => {
                const isGroupStart =
                  i > 0 && getCategory(name) !== getCategory(tokens[i - 1][0]);
                return (
                  <tr
                    key={name}
                    className={isGroupStart ? styles.groupDivider : undefined}>
                    <td>
                      <ColorSwatch group={key} value={value} />
                    </td>
                    <td className={styles.colorTokenName}>
                      color/{title}/{name}
                    </td>
                    <td className={styles.colorPrimitive}>
                      {extractPrimitive(value)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

export const Color: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => <SemanticColorPage />,
};
