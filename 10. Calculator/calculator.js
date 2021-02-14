//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname); // sendFile transfers the file over to the file when a request is made.
// __dirname gives the file path of the current file no matter where it is hosted
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});