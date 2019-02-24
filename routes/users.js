const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");

var url = 
var db;
mongoClient.connect(url, function(error, client) {
    assert.equal(error, null);
    db = client.db("ratecourse");
});

// /* GET users listing. */
// router.get("/register", function(req, res, next) {
//  res.send("AM I HERE???");
// });

router.post("/register", function(request, response) {
    const data = request.body.data;
    db.collection("user").findOne({ username: data.username }, function(error,result) {
        if (result != null) {
            response.status(409).send("User already exists.");
        } else {
            db.collection("user").insertOne(
                { username: data.username, password: data.password },
                function(error, result) {
                    response.send("Register success");
                }
            );
        }
    });
});

router.post("/login", function(request, response) {
    const data = request.body.data;
    db.collection("user").findOne({ username: data.username },
        function(error,result) {
        if (result == null || result.password != data.password) {
            response.status(401).send("Username or Password not correct.");
        } else {
            const sessionToken = require('uuid/v4');
            db.collection("usersession").insertOne(
                { username: data.username, sessionToken: sessionToken},
                function(error, result) {
                    response.send(sessionToken);
                }
            );
        }
    });
});

module.exports = router;
