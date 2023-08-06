import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index-es.min.js',
      format: 'es',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
      }),
      typescript({
        declaration: true,
        outDir: 'types',
        emitDeclarationOnly: true,
      }),
      terser(),
    ]
  },
  {
    input: 'dist/index-es.min.js',
    output: {
      file: 'dist/index-cjs.min.js',
      format: 'cjs',
    },
    plugins: [terser()]
  },
]
