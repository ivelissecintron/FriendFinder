//dependencies
var express = require("express");
var bodyParser= require("body-parser");
var path = require("path");

//creating an express server
var app = express();

//set initial port 
var PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//set up route files 
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});