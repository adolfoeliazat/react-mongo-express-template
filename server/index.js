var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

// to make the database file run:
var Movie = require('../database/index.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', function (req, res) {
//   res.send('Hello, world!');
// })

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
