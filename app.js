var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var db;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
///////// MongoDB connection /////////////////

MongoClient.connect("mongodb://meng:dbdb123@ds145895.mlab.com:45895/ratecourse", function(err, database) {
  if(err) return console.error(err);

  db = database;
  console.log("Connected to Mongodb...");
  // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere. 
});
/////////////////////////////////////////////

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
