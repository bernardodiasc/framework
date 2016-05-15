'use strict'

var path = require('path')
var fs = require('fs')

// https://github.com/MistAEGIS/Directory-Structure-JSON/blob/master/index.js
var getStructure = function (fs, dir, callback) {
  var results = []
  var total = { files: 0, folders: 0 }

  fs.readdir(dir, function (err, list) {
    if (err) return callback(err)

    var itemsLeft = list.length

    if (!itemsLeft) return callback(null, {name: path.basename(dir), type: 'folder', children: results}, total)

    list.forEach(function (file) {
      file = path.resolve(dir, file)
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          getStructure(fs, file, function (err, res, tot) {
            total.folders = total.folders + tot.folders + 1
            total.files = total.files + tot.files
            results.push({ name: path.basename(file), type: 'folder', children: res })
            if (!--itemsLeft) callback(null, results, total)
          })
        }
        else {
          results.push({ type: 'file', name: path.basename(file) })
          total.files++
          if (!--itemsLeft) callback(null, results, total)
        }
      })
    })
  })
}

var documentator = function (basepath, callback) {
  getStructure(fs, basepath, function (err, structure, total) {
    if (err) console.log(err)
    callback(structure)
  })
}

module.exports = documentator
