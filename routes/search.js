const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");

var url = "mongodb://meng:dbdb123@ds145895.mlab.com:45895/ratecourse";
var db;
mongoClient.connect(url, function(error, client) {
  assert.equal(error, null);
  db = client.db("ratecourse");
});

// /* GET users listing. */
// router.get("/register", function(req, res, next) {
//  res.send("AM I HERE???");
// });

router.get("/getAllProfessors", function(err,res) {
  db.collection("professor").find().toArray(function(error,result) {
    if(error) {
      throw error;
    }
    console.log("got p list!");
    res.send(result);
  });
});

router.get("/getAllCourses", function(err,res) {
  db.collection("course").find().toArray(function(error,result) {
    if(error) {
      throw error;
    }
    console.log("got c list!");
    res.send(result);
  });
});

router.get("/getCPList", function(err,res) {
  db.collection("CPpair").find().toArray(function(error,result) {
    if(error) {
      throw error;
    }
    console.log("got CPpair list!");
    res.send(result);
  });
});

router.get("/getMatches", function(request, response) {
  const data = request.query;
  db.collection("CPpair").find({ professor: data.professor, courseId: data.course})
    .toArray(function(error,result) {
      if(error) {
        throw error;
      }
      console.log("got MATCH list!");
      response.send(result);
    });
});

router.get("/getComments", function(request, response) {
  const data = request.query;
  db.collection("comment").find({ courseId: data.course, professor: data.professor}).toArray(function(error,result) {
    if(error) {
      throw error;
    }
    console.log("got comments");
    response.send(result);     
  });
});

router.post("/saveComments", function(request, response) {
  const data = request.body.data;
  db.collection("comment").insertOne({ 
    courseId: data.course, 
    professor: data.professor, 
    username:data.username, 
    comment: data.comments, 
  }),(function(error) {
    if(error) {
      throw error;
    }
    response.send("comment saved");
  });
});

module.exports = router;