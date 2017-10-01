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
          'env',
          {
            loose: true,
            modules: false
          }
        ],
        'stage-0',
        'react'
      ],
      plugins: ['external-helpers', 'emotion'],
      babelrc: false,
      externalHelpersWhitelist: ['extends']
    }),
    alias({
      'styled-components': 'react-emotion'
    })
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ]
}
