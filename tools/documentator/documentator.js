'use strict'

var path = require('path')
var fs = require('fs')

module.exports = function documentator (basepath) {
  var basepath = basepath || './'

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

  fixture = getStructure(fs, basepath, function (err, structure, total) {
      if (err) console.log(err)

      return structure
  });

  return fixture
}

function getStructure (fs, dir, callback) {
    var results = [];
    var total = { files: 0, folders: 0 };

    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);

        var itemsLeft = list.length;

        if (!itemsLeft) return callback(null, {name: path.basename(dir), type: 'folder', children: results}, total);

        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    getStructure(fs, file, function (err, res, tot) {
                        total.folders = total.folders + tot.folders + 1;
                        total.files = total.files + tot.files;
                        results.push({ name: path.basename(file), type: 'folder', children: res });
                        if (!--itemsLeft) callback(null, results, total);
                    });
                }
                else {
                    results.push({ type: 'file', name: path.basename(file) });
                    total.files++;
                    if (!--itemsLeft) callback(null, results, total);
                }
            });
        });
    });
}
