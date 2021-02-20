//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public")); //special express function that creates a static folder (public) and provides the path to it.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});