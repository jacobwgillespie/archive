import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import dts from 'rollup-plugin-dts'
import {terser} from 'rollup-plugin-terser'
import esbuild from 'rollup-plugin-esbuild'
import {getBabelOutputPlugin} from '@rollup/plugin-babel'

export default [
  {
    input: './src/index.ts',
    output: {dir: 'dist', format: 'cjs', sourcemap: true},
    plugins: [
      externals({devDeps: false}),
      nodeResolve(),
      commonjs(),
      esbuild({minify: true}),
      getBabelOutputPlugin({presets: ['@babel/preset-env']}),
      terser(),
    ],
  },

  {
    input: './src/index.ts',
    output: {file: 'dist/index.d.ts', format: 'es'},
    plugins: [dts()],
  },
]
