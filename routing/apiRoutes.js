// links to a data source 
var friendsData = require("../app/data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    // post new info to the server
    app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    friendsData.push(newFriend);
    res.json(friendsData);
    });
}