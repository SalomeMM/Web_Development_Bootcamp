//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express(); // create express app

app.set("view engine", "ejs"); // set view engine using ejs

app.use(bodyParser.urlencoded({ extended: true })); // use body parser
app.use(express.static("public")); // tell express that our static files are held inside the public folder

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  // set up our connection to mongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = {
  // create our schema
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema); // create our article model

app.get("/articles", function (req, res) {
  Article.find(function (err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});

app.post("/articles", function (req, res) { // our post request targets the /articles route
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({ // creates a new article using the data submitted through the post request
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function (err) { // we save the created article
        if (!err) {
            res.send("Successfully added a new article.");
        } else {
            res.send(err); // if there is an error, we send it back to the client
        }
    });
});

app.delete("/articles", function (req, res) {
    Article.deleteMany(function (err) {
        if (!err) {
            res.send("Successfully deleted all articles.")
        } else {
            res.send(err);
        }
    });
});




app.listen(3001, function () {
  console.log("Server started on port 3001");
});
