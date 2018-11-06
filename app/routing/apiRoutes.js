var friends = require("../data/friends.js");
app.get("/api/friends",function(req,res){
    return  friends.getFriends();
});

app.post("/api/friends",function(req,res){
    //create new friend object based on response
    //newPerson = new Person(name,photo,scoresarray)
    //calc best friend
    //calcFriend(req.body);
    //add friend to friends array after calculating new person objects compatability
    friends.addFriend(req.body);    
});

function calcFriend(newFriend){
    var bestMatch;

    return bestMatch;
}