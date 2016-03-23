'use strict';

let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let routes = require('./routes');

let App = module.exports = express();

app.configure(function(){
  
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  
  app.use(express.logger(':method :url :status'));
  app.use(cookieParser());
  app.use(bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(routes);

});

let port = process.env.PORT || 7575; 

app.listen(port, function() {
  console.log("Application listening on port %d in %s mode", port, app.settings.env);
});
