var express = require("express");
    var people = [
        {
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
        //convert string to array
        //first value has square bracket before score
        //last value has square bracket after score
        
        people.push(newFriend);
        //console.log(people);
    }
