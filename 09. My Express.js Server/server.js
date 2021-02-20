//jshint esversion:6

// const express = require("express");
// const app = express();
// app.listen(3000);
// these 3 lines are the bare bones of an Express server.

const express = require("express"); // new const that is going to require teh package express.

const app = express(); // create a constant that is a function that represents the Express module.
// using the word "app" is best practice

app.get("/", function(req, res){ // "/" is the route that we are going to respond to. Callback function parameters are "request" and "response". Best practice is shortening them.
  res.send("<h1>Hello World!</h1>"); // this will be printed in the home location.
}); //1st parameter is location of the get request, 2nd is a callback function

// example of another route:
app.get("/contact", function(req, res){
  res.send("Contact me at...");
});

// Challenge: create an "About" route
app.get("/about", function(req, res){
  res.send("This website was created by Salomé Morales");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Beer</li><li>Coding</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
}); // use this app. Tells it to listen to a specific port, in this case 3000.
//if we wanted to be able to see when our port is set up and when our server is running, we can add a callback function.

//nodemon = utility that will monitor for changes in my source code and it will automatically restart the server when it detects them.
