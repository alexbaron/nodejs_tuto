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


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// module.exports = router;