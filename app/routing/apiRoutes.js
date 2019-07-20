module.exports = function(app) {
  // get request
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // post request
  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      friendDifference: Infinity
    };

    // parsing user's survey post
    var userData = req.body;
    var userScores = userData.scores;

    // calculating difference between scores
    var totalDifference;

    // looping the possible results in the database
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      // another loop but idk why
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // difference between  scores and sum them into the totalDifference
        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentFriendScore)
        );
      }

      if (totalDifference <= bestMatch.friendDifference) {
        // resetting?
        bestMatch.friendDifference = totalDifference;
      }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
};
