var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        var arr = friends.getFriends();
        return res.json(arr);
        //return res.arr.json();
    });

    app.post("/api/friends", function (req, res) {
        //create new friend object based on response
        //newPerson = new Person(name,photo,scoresarray)
        //calc best friend
        //calcFriend(req.body);
        var newBuddy = {
            name: "Ian",
            photo: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
            scores: [4, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        }
        //add friend to friends array after calculating new person objects compatability
        console.log("add friends");
        if (req.body) {
            req.body.scores = makeArray(req.body.scores);
            friends.addFriend(req.body);
            calcFriend(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });
    function makeArray(str){
        var newScores = str.split(",");
            newScores[0] = newScores[0].split("[")[1];
            newScores[9] = newScores[9].split("]")[0];
            newScores.forEach(element =>{
                element = parseInt(element);
            });
            return newScores;
    }
    function calcFriend(newFriend) {
        var bestMatch = 1000;
        var friendsArr = friends.getFriends();
        var matchScore = 0;
        var bestMatchPerson;
        friendsArr.forEach(element => {
            matchScore = 0;
            if(element.name == newFriend.name){

            }
            else{
                for (var i = 0; i < element.scores.length; i++) {
                    matchScore += Math.abs(newFriend.scores[i] - element.scores[i]);
                }
                if (bestMatch > matchScore) {
                    bestMatch = matchScore;
                    bestMatchPerson = element;
                }
            }
            element.scores
        });
        console.log(bestMatchPerson);
        return bestMatchPerson;
    }

}