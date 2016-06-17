var $ = require('jquery');
var Handlebars = require('handlebars');

var source = require('./templates/index.hbs');
var template = Handlebars.compile(source);
var html = template({
  arr: [1,2,3,4,5],
  message: 'Message from context'
});

$('#main').html(html);
