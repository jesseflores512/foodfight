const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

const app = express()

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017')
