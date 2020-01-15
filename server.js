var express = require('express');
var path = require('path');
var app = express();
var {home} = require('./views/home.html.js');
var {cat} = require('./views/cat.html.js');

class CatStorage {
  constructor() {
    this.data = {
      cats: [
        {
          info: {name:'Pigwidgeon', path:'/cat/Pigwidgeon', image:'https://i.imgur.com/ea7WXNDm.jpg'},
          growth: [
            {date:'05/10/2017', age:'6', weight:750, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'},
            {date:'05/11/2017', age:'6', weight:760, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'}
          ]
        },
        {
          info: {name:'Errol', path:'/cat/Errol', image:'https://i.imgur.com/VcXX9Pvm.jpg'},
          growth: [
            {date:'05/10/2017', age:'6', weight:800, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'},
            {date:'05/11/2017', age:'6', weight:810, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'}
          ]
        },
        {
          info: {name:'Hedwig', path:'/cat/Hedwig', image:'http://i.imgur.com/HKQjnXzm.jpg'},
          growth: [
            {date:'05/10/2017', age:'6', weight:700, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'},
            {date:'05/11/2017', age:'6', weight:710, milk: 'n/a', feedings:3, notes:'n/a', medicalNotes:'gave meds'}
          ]
        }
      ]
    }
  }
  getCatNames(){
    let out = []
    for(let i=0; i<this.data.cats.length; i++) {
      let cat = this.data.cats[i];
      out.push(cat.info);
    }
    return out;
  }
  getCatInfo(catName){
    let out;
    for(let cat of this.data.cats) {
      if (cat.info.name === catName) {
        out = cat;
      }
    }
    return out;
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
