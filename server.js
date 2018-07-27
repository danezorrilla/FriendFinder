// import the express module
var express = require('express');

// import the body-parser module
var bodyParser = require('body-parser');

// creating an 'express' server
var app = express();

// define the port
var PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use for static routing
app.use(express.static(__dirname + "/public"));

// maps to our html files
require("./routing/htmlRoutes.js")(app);

// maps to our http methods
require('./routing/apiRoutes.js')(app);

// starts the server
  app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
  });