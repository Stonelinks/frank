var express = require("express");
var app = express();
var orm = require('orm');
app.use(express.logger());

var _ = require('underscore')
var appModels = require('./models')

app.use(orm.express(process.env.DB_URL, {
  define: function(db, models, next) {

    // register all the models
    _.forEach(appModels, function(value, key) {
      models[key] = db.define(key, value.attributes, value.methods, value.validations);
    });
    
    // sync the db
    db.sync();
  }
}));

app.get('/', function(request, response) {
  var ret = 'People:\n';
  
  _.forEach(request.models.person.find().all(), function(value, key) {
    ret += '  ' + key + ': ' + value.name;
  });
  
  response.send(ret);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
