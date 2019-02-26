var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express1" });
});

module.exports = router;

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