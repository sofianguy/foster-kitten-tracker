var express = require('express');
var path = require('path');
var app = express();
var {home} = require('./views/home.html.js');
var {cat} = require('./views/cat.html.js');

app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', function (req, res) {
  res.end(home());
});

app.get('/cat/:name', function (req, res) {
  var name = req.params.name;
  res.send(cat(name));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
