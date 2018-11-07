
    var people = [
        {
            "name": "Ahmed",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg/600px-Default_profile_picture_%28male%29_on_Facebook.jpg",
            "scores": [
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
            ]
        }
    ]

    module.exports.getFriends = function () {
        return people;
    }

    module.exports.addFriend = function (newFriend) {
        people.push(newFriend);
    }
