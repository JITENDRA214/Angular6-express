var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');


var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cors =require('cors');

mongoose.connect('mongodb://localhost:/meandb', {useMongoClient: true});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/', appRoutes);

http.createServer(app).listen(port);   

console.log("Backend running on port:", port);