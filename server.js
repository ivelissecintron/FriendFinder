//dependencies
var express = require("express");
var bodyParser= require("body-parser");

//creating an express server
var app = express();

//set initial port 
var PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set up route files 
require("../routing/apiRoutes")(app);
require("../routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});