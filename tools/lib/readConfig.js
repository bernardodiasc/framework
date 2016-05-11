'use strict'

var fs = require('fs')

/**
 * Run through Handlebars to create HTML
 *
 * @param {object} json
 * @returns {string} html
 */
var build = function(tool, done) {
  try {
    var customOptions = fs.readFileSync('./config/documentator.json', 'utf8')
  } catch(err) {
    console.log('No ".styleguide" configuration file found in current directory, using defaults')
  }
}

module.exports = build
