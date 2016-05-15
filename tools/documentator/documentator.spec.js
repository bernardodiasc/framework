// walk all folders
// read all files exept hidden (starts with .) and tools index (run as bash)
// check each file format
// perform transformations based on file format
// build json structure
  // input (file structure)
  // output (json - sample to be provided)
// write data file in the build folder


/*

Sample:

tree tools/documentator/

├── README.md
├── documentator.js
├── documentator.spec.js
├── fixture
│   └── README.md
└── index.js

*/

var expect = require('chai').expect
var documentator = require('./documentator.js')
var basepath = './tools/documentator'
var fixture = [
  {
    'type': 'file',
    'name': 'README.md'
  },
  {
    'type': 'file',
    'name': 'documentator.js'
  },
  {
    'type': 'file',
    'name': 'documentator.spec.js'
  },
  {
    'type': 'file',
    'name': 'index.js'
  },
  {
    'name': 'fixture',
    'type': 'folder',
    'children': [
      {
        'type': 'file',
        'name': 'README.md'
      }
    ]
  }
]

describe('documentator', function() {
  it('expect documentator with basepath to be equal fixture', function() {
    documentator(basepath, function(structure) {
      expect(structure).to.deep.equal(fixture)
    })
  })
})

