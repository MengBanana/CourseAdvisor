const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");

let url = process.env.MONGODB_URI || require("./loginDetails.js");
let db;
mongoClient.connect(url, function(error, client) {
  assert.equal(error, null);
  db = client.db("ratecourse");
});


router.post("/register", function(request, response) {
  const data = request.body.data;
  db.collection("user").findOne({ username: data.username }, function(error,result) {
    if (result != null) {
      response.status(409).send("User already exists.");
    } else {
      db.collection("user").insertOne({ username: data.username, password: data.password },function(error, result) {
        response.send(result);});
    }
  });
});


router.post("/login", function(request, response) {
  const data = request.body.data;
  db.collection("user").findOne({ username: data.username },
    function(error,result) {
      if (result === null || result.password != data.password) {
        response.status(401).send("Username or Password not correct.");
      } else {
        response.send(result);
      }
    });
});

module.exports = router;
