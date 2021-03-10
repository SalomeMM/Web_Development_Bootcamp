//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

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

const userSchema = {
  email: String,
  password: String,
};

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
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });
  newUser.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.render("secrets"); // no get request for secrets because we only want to render it when the user is registered or logged in
    }
  });
});

app.post("/login", function (req, res) {
    const username = req.body.username; // the one that the user types when trying to log in
    const password = req.body.password;
    User.findOne({ email: username }, function (err, foundUser) { //find the user in our DB
        if (err) {
            console.log(err);
        } else {
            if (foundUser) { // if the user is found
                if (foundUser.password == password) { // and if that user has stored the same password as the one given now
                    res.render("secrets"); // then render the secrets page
                }
            }

        }
    });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
