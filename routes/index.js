var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  //res.render("index", { title: "Express1" });
  res.sendfile("index.html", { root: __dirname + "../front/public/index.html" } );
});

module.exports = router;