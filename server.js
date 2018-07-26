var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

require("./routing/htmlRoutes.js")(app);
require('./routing/apiRoutes.js')(app);

  app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
  });