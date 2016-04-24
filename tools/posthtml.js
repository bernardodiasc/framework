'use strict'

var posthtml = require('posthtml')
var html = require('posthtml-package-html')

var source = `<div block="block"><h1 elem="title">Title</h1><p elem="text" mods="red">Text</p></div>`

posthtml(html())
  .process(source)
  .then(result => console.log(result.html))
