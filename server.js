var express = require('express');
var path = require('path');
var app = express();
var {home} = require('./views/home.html.js');
var {cat} = require('./views/cat.html.js');

class CatStorage {
  constructor() {
  }
  getCatNames(){
    return [{name:'Pigwidgeon', path:'/cat/pigwidgeon'},
    {name:'Errol', path:'/cat/errol'},
    {name:'Hedwig', path:'/cat/hedwig'}];
  }
  getCatInfo(catName){
    return [{date:'05/10/2017', age:'6', weight:700, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'},
    {date:'05/11/2017', age:'6', weight:710, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'}
    ]
  }
}
const catStore = new CatStorage();

app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', function (req, res) {
  res.end(home(catStore.getCatNames()));
});

app.get('/cat/:name', function (req, res) {
  var name = req.params.name;
  res.send(cat(name, catStore.getCatInfo(name)));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
