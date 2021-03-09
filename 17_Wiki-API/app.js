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

// implement chainable route handlers with app.route:

////////// Requests targeting ALL articles //////////

app
  .route("/articles")

  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })

  .post(function (req, res) {
    // our post request targets the /articles route
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
      // creates a new article using the data submitted through the post request
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      // we save the created article
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err); // if there is an error, we send it back to the client
      }
    });
  })

  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });

////////// Requests targeting a specific article //////////

app.route("/articles/:articleTitle")

    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No articles matching that title were found.");
            }
        });
    })

    .put(function (req, res) {
        Article.replaceOne( // formerly "update()"
            { title: req.params.articleTitle }, // condition
            { title: req.body.title, content: req.body.content }, // update
            { overwrite: true }, // mongoose by default doesn't allow to overwrite, we need to specify it
            function (err) {
                if (!err) {
                    console.log("Successfully updated article.");
                } else {
                    console.log(err);
                }
            }
        )
    })
    
    .patch(function (req, res) {
        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send("Successfully updated article.")
                } else {
                    console.log(err);
                }
            }
        )
    })
    
    .delete(function (req, res) {

        Article.deleteOne(
            { title: req.params.articleTitle },
            function (err) {
            if (!err) {
                res.send("Successfully deleted the corresponding article.");
            } else {
                res.send(err);
            }
        })        
    })
    ;

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
