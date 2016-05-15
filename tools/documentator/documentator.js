'use strict'

module.exports = function documentator (basepath) {
  var basepath = basepath || './tools/documentator'

  // do stuff here that transforms from path given to json fixture below

  var fixture = [
    {
      "type": "file",
      "name": "README.md"
    },
    {
      "type": "file",
      "name": "documentator.js"
    },
    {
      "type": "file",
      "name": "documentator.spec.js"
    },
    {
      "type": "folder",
      "name": "fixture",
      "children": [
        {
          "type": "file",
          "name": "README.md"
        }
      ]
    },
    {
      "type": "file",
      "name": "index.js"
    }
  ]

  return fixture
}
