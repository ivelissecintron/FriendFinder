//linking route to data source
var friendsData = require("../data/friends.js")

//get and post routes
module.exports = function(app) {
    
    //display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    // handle incoming survey results 
    app.post("/api/friends", function(req, res) {
        //logic
        res.json(friendsData);
    });  
}