// server.js

// modules
// ============
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookieParser');
var mongoose = require('mongoose');
var morgan = require('morgan');
// var expressValidator = require('express-validator');

// config
// ============
var configDB = require('./config/database');
var host = require('./config/host');

// connect to the database
mongoose.connect(configDB.db);

// set up APP
// ===============
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes
// ============
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static(__dirname + '/public'));

app.use('/', router);
