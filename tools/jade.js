var jade = require('jade');

var options = {nono: 'asd'};
var html = jade.renderFile('./src/templates/index.jade', options);

console.log(html);
