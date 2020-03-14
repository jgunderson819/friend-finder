let friends = require("../data/friends");

module.exports = function(app){
    // Return friends as json
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });


    app.post("/api/friends",function(req,res){
        console.log(req.body.scores);

        // Receive user details (name, photo, scores)

        var user = req.body

        // parseInt for scores

        for ( var i=0; i< user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }
        // default friend match is first friend result will be the minimum difference in scores

        var bestFriendIndex = 0
        var minimumDifference = 40

        //  in this for loop, start off with a 0 difference, and compare the user and the ith friends scores, one set at a time
        // whatever the difference is, add to the totalDifference

        for (var i=0; i< friends.length; i++){
            var totalDifference = 0
            for(var j=0;j<friends[i].scores.length; j++){

                var difference = Math.abs(user.scores[j]-friends[i].scores[j]);
                totalDifference += difference
                // if there is a new minimum, change the bestFriendIndex and set the new minimum
                if(totalDifference<minimumDifference){
                    bestFriendIndex = i
                    minimumDifference = totalDifference
                }
            }

            // after finding match add user to friend array
            friends.push(user);

            // send back to browser, the best friend match
            res.json(friends[bestFriendIndex]);
        }

    });
};