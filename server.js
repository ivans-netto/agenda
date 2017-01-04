/*global require, console, process, module*/
'use strict';

// setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./config/database');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// config
mongoose.connect(database.localUrl);

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


// routes
require('./app/routes.js')(app);

// start agenda app with node
app.listen(port);
console.log("App listening on port " + port);
