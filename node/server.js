'use strict';

const express = require('express');
var React = require('react');
// var router = express.Router();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// App
const app = express();
//templating
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//routing
app.get('/', (req, res) => {
  res.send('Hello World 0');
});

app.get('/about', (req,res) => {
  res.send('About this tuto function flechee');
})

// app.get('/about', function (req, res) {
//   res.send('about');
// });

class Screen {  
  //var width;
  //var height;
  
  constructor(witdh, height){
    this.width = width;
    this.height = height;
  }
  
  diagonal() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
  
  dimensions(definition) {
    var dimensions = definition.split('x')
    this.width = parseInt(dimensions[0]);
    this.height = parseInt(dimensions[1]);
  }
  
}

var screen = new Screen(0, 0);
screen.dimensions = '500x300';
screen.width = 400;
console.log(screen.diagonal);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// module.exports = router;