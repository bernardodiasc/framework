'use strict'

// PostCSS
const fs = require('fs')
const postcss = require('postcss')
const atImport = require('postcss-import')
const stylelint = require('stylelint')
const cssnano = require('cssnano')
const reporter = require('postcss-reporter')

// Config
const entry = 'components/app/styles/index.css'
const build = 'build/index.css'
const plugins = [
  atImport(),
  stylelint(),
  cssnano(),
  reporter({ clearMessages: true })
]

postcss(plugins)
  .process(fs.readFileSync(entry, 'utf8'), { from: entry, to: build })
  .then(function (result) {
    fs.writeFileSync(build, result.css)
    if ( result.map ) fs.writeFileSync(build+'.map', result.map)
  })
  .catch(err => console.error(err.stack))
