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

describe('function', function() {

  beforeEach(function() {
    documentator = require('./documentator.js')
    basepath = 'tools/documentator/'
    fixture = [
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
  })

  it('test output', function () {
    expect(documentator(basepath)).toEqual(fixture)
  })

})
