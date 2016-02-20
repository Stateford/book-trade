// server.js

// modules
// ============
var express = require('express');
var app = express();
var express-validator = require('express-validator');
var bodyParser = require('body-parser');
var cookieParser = require('cookieParser');
var mongoose = require('mongoose');
var morgan = require('morgan');

// config
// ============
var configDB = require('./config/database');
var host = require('./config/host');

// connect to the database
mongoose.connect(configDB.db);
