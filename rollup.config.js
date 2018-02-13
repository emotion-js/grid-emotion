import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'
import pkg from './package.json'

export default {
  input: './node_modules/grid-styled/src/index.js',
  external: [
    'react',
    'styled-system',
    'prop-types',
    'react-emotion',
    'tag-hoc'
  ],
  plugins: [
    babel({
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false
          }
        ],
        '@babel/stage-0',
        '@babel/react'
      ],
      plugins: ['emotion'],
      babelrc: false
    }),
    alias({
      'styled-components': require.resolve('./styled-alias')
    })
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ]
}
