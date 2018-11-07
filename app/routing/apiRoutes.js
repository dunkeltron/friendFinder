var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        var arr = friends.getFriends();
        return res.json(arr);
    });

    //this function assumes that req.body will be a valid friend object 
    app.post("/api/friends", function (req, res) {
        //add friend to friends array after calculating new person objects compatability then return best matching friend object
        if (req.body) {  
            req.body.scores = makeIntArray(req.body.scores);
            friends.addFriend(req.body);         
            res.json(calcFriend(req.body));
        }
        else {
            res.json(false);
        }
    });

    //make sure the values in the array are integers
    function makeIntArray(arr){
            arr.forEach(element =>{
                element = parseInt(element);
            });
            return arr;
    }

    //calculate and return friend object with the lowest matchScore
    function calcFriend(newFriend) {
        var bestMatch = 1000;
        var friendsArr = friends.getFriends();
        var matchScore = 0;
        var bestMatchPerson;
        friendsArr.forEach(element => {
            matchScore = 0;
            //don't compare to duplicate entries
            if(element === newFriend){                
            }
            else{
                //calculate matchscore
                for (var i = 0; i < element.scores.length; i++) {
                    matchScore += Math.abs(newFriend.scores[i] - element.scores[i]);
                }
                //matchscore is determined by least difference in scores
                //if the current element's matchscore is lower than bestMatch then we need to store the current element as the best match
                if (bestMatch > matchScore) {
                    bestMatch = matchScore;
                    bestMatchPerson = element;
                }
            }
        });
        return bestMatchPerson;
    }

}