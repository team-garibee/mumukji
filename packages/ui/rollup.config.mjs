import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import preserveDirectives from 'rollup-preserve-directives';

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
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        autoModules: true,
        extract: true,
        use: ['sass'],
      }),
      preserveDirectives(),
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
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        autoModules: true,
        extract: false,
        inject: false,
        use: ['sass'],
      }),
      preserveDirectives(),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    external: [/\.s?css$/, '@mumukji/tokens/semantic-css'],
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
