'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');

// Connect to the Mongo instance
mongoose.connect('mongodb://localhost/sit');

// Create a Mongoose schema
var Vegetable = new mongoose.Schema({ name: String });

// Note that Mongoose middleware will be executed as usual
Vegetable.pre('save', function(next) {
  console.log('A vegetable was saved to Mongo: %s.', this.get('name'));
  next();
});

// Register the schema
mongoose.model('vegetable', Vegetable);

// Create the API routes
baucis.rest('vegetable');

// Create dummy data
var names = ['tomato', 'turnip', 'lovage', 'snap pea', 'carrot', 'zucchini'];
var vegetables = names.map(function(name) { return { name: name } });

// Clear the database of old vegetables
mongoose.model('vegetable').remove(function(error) {
  if (error) throw error;

  // Put the fresh vegetables in the database
  mongoose.model('vegetable').create(vegetables, function(error) {
    if (error) throw error;

    // Create the app and listen for API requests
    var app = express();

    // simple log
    app.use('/api/v1', function(req, res, next) {

      // change this at some point... it allows requests to come from EVERYWHERE
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-API-KEY');
      res.header('Content-Type', 'application/json; charset=utf-8');
      baucis({swagger: true})(req, res, next);
    });

    app.configure(function() {
      app.set('port', 9000);
      app.set('view engine', 'handlebars');
      app.set('views', __dirname + '../app/scripts/views');
    });

    // simple log
    app.use(function(req, res, next) {
      console.log('%s %s', req.method, req.url);
      next();
    });

    // mount static
    app.use(express.static(path.join(__dirname, '../app')));
    app.use(express.static(path.join(__dirname, '../.tmp')));

    // route index.html
    app.get('/', function(req, res) {
      res.sendfile(path.join(__dirname, '../app/index.html'));
    });

    // start server
    http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
      console.log('Express App started on port ' + app.get('port'));
    });
  });
});
