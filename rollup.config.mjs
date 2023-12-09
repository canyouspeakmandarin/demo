import path from 'path'
import { fileURLToPath } from 'url'

import alias from "@rollup/plugin-alias"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  input: './src/index.js',
  output: {
    dir: 'lib',
    entryFileNames: '[name].min.js',
    format: 'cjs',
    plugins: [terser()],
    sourcemap: false,
  },
  plugins: [
    json(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
    commonjs({
      sourceMap: false,
    }),
    alias({
      entries: {
        '@': path.resolve(__dirname, 'src'),
      },
    }),
  ],
  external: [],
}
