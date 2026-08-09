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
        autoModules: true,
        extract: true,
        use: ['sass'],
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
        autoModules: true,
        extract: false,
        inject: false,
        use: ['sass'],
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
