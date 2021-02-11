//jshint esversion:6

const express = require("express"); // new const that is going to require teh package express.

const app = express(); // create a constant that is a function that represents the Express module.
// using the word "app" is best practice

app.listen(3000, function() {
  console.log("Server started on port 3000");
}); // use this app. Tells it to listen to a specific port, in this case 3000.
//if we wanted to be able to see when our port is set up and when our server is running, we can add a callback function.

// the past 3 lines are the bare bones of an Express server.
