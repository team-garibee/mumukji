import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, 'src');
const typesDir = path.resolve(__dirname, 'dist/types');

const sourceAliasOptions = {
  entries: [{ find: '@', replacement: srcDir }],
};

const declarationAliasOptions = {
  entries: [{ find: '@', replacement: typesDir }],
};

const sassAliasLoader = {
  name: 'sass-alias',
  test: /\.(sass|scss)$/,
  process({ code }) {
    return {
      code: code.replace(
        /(['"])@\/([^'"]+)\1/g,
        (_match, quote, importPath) => {
          return `${quote}${path.resolve(srcDir, importPath)}${quote}`;
        },
      ),
    };
  },
};

const createPostcssOptions = () => ({
  autoModules: true,
  use: ['sass', 'sass-alias'],
  loaders: [sassAliasLoader],
});

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      alias(sourceAliasOptions),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        ...createPostcssOptions(),
        extract: true,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      alias(sourceAliasOptions),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        ...createPostcssOptions(),
        extract: false,
        inject: false,
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    external: [/\.s?css$/, '@mumukji/tokens/semantic-css'],
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [alias(declarationAliasOptions), dts()],
  },
];
