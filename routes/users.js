const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");

var url = "/////////";

/* GET users listing. */
// router.get("/", function(req, res, next) {
// 	res.send("respond with a resource");
// });

router.post("/register", function(req, res) {
  mongoClient.connect(url, function(error, client) {
	 assert.equal(error, null);
		const data = req.body.data;
		const db = client.db("ratecourse");
		db.collection("users").findOne({ _id: data.username }, function(err,result
		) {
			if (err) {
				res.status(500);
				client.close();
				res.send(error.message);
			} else if (result !== null) {
				res.status(400);
				client.close();
				res.send(
					"username already exists!"
				);
			} else {
				db.collection("users").insertOne(
					{
						username: data.username,
						password: data.password,
						firstname:data.firstname,
						lastname:data.lastname,
						email:data.email,
						bio:data.bio
					},
					function(error, result) {
						assert.equal(null, error);
						assert.equal(1, result.insertedCount);
						console.log("Inserted!");
						client.close();
					}
				);
			}
		});
	});
});

module.exports = router;