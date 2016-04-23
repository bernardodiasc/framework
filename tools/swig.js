'use strict';

var fs  = require('fs');
var swig  = require('swig');
var data = {};

var content = swig.renderFile('./src/templates/index.swig', data);

fs.writeFile('./build/index.html', content, (err) => {
  if (err) return err;
  console.log(content);
});
