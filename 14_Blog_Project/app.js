//jshint esversion:6

const express = require("express"); // import modules
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

let posts = [];

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express(); // create express app

app.set("view engine", "ejs"); // set view engine using ejs

app.use(bodyParser.urlencoded({ extended: true })); // use body parser
app.use(express.static("public")); // tell express that our static files are held inside the public folder

app.get("/", function (req, res) {
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts,
  }); // the page we want to render needs to be something .ejs and be inside a folder called views in the root of our maijn project in the same hierarchical level as app.js
  // console.log(posts);
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/"); // this will take us to app.get("/"...
});

app.get("/posts/:postName", function (req, res) {
  const requestedTitle = _.lowerCase([req.params.postName]);

  posts.forEach(function (post) {
    const storedTitle = _.lowerCase([post.title]);
    const storedContent = _.lowerCase([post.content]);
    console.log(storedTitle);

    if (storedTitle === requestedTitle) {
      res.render("post", {
    title: post.title,
    content: post.content
  });
      console.log("It's a match!");
    } else {
      console.log("Not a match :(");
    }
  });
  
});

// for (i = 0; i < posts.length; i++) {
//   if (requestedTitle === posts[i].title) {
//     console.log("Match!")
//   } else {
//     console.log("Not a match :(")
//   }
// };

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
