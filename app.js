var express = require('express');
var path = require('path');
var app = express();
var {home} = require('./views/home.html.js');

app.get('/', function (req, res) {
  res.end(home());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
