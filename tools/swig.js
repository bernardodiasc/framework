'use strict';

var fs  = require('fs');
var swig  = require('swig');
var data = require('../public/data.json');

var content = swig.renderFile('../sources/templates/pages/index.swig', data);
fs.writeFile('../index.html', content, (err) => {
  if (err) return err;
  console.log(content);
});
