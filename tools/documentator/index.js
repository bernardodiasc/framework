#!/usr/bin/env node

'use strict'

var documentator = require('./documentator.js')

documentator('tools', function(structure) {
  console.log(structure)
})
