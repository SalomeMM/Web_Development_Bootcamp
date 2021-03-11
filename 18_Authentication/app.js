//jshint esversion:6

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption"); // can also authenticate // substituted by md5
// const md5 = require("md5"); // substituted by bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

console.log(process.env.API_KEY);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] }); // substituted by md5

// create this before the mongoose model

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = new User({
      email: req.body.username,
      password: hash
    });
    newUser.save(function (err) {
      // mongoose-encryption will encrypt the password
      if (err) {
        console.log(err);
      } else {
        res.render("secrets"); // no get request for secrets because we only want to render it when the user is registered or logged in
      }
    });
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username; // the one that the user types when trying to log in
  const password = req.body.password;
  User.findOne({ email: username }, function (err, foundUser) {
    //find the user in our DB, mongoose-encryption will decrypt the password
    if (err) {
      console.log(err);
    } else {
      if (foundUser) { // if the user is found
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) // password with the hashing = stored password
            res.render("secrets");
        });
      }
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
