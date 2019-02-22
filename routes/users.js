var express = require("express");
var router = express.Router();
//const User = require("../models/userModel.js");
//const bcrypt = require("bcrypt-nodejs");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});



// router.post("/register", (req, res) => {
//   const today = new Date();
//   const userData = {
//     username: req.body.username,
//     password: req.body.password,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     bio: req.body.bio,
//     created: today
//   };

//   User.findOne({
//     username:req.body.username
//   })

//     .then( user=> {
//       if (!user) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           userData.password = hash;
//           User.create(userData)
//             .then(user => {
//               res.json({
//                 status: user.username + "Registered!"
//               });
//             })
//             .catch(err => {
//               res.send("error: " + err);
//             });
//         });
//       } else {
//         res.json({ error: "Username already exists."});
//       }
//     })
//     .catch(err => {
//       res.send ("error: " + err);
//     });
// });

module.exports = router;