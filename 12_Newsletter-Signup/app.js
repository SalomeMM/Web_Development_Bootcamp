//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public")); //special express function that creates a static folder (public) and provides the path to it.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;

console.log("Nombre: " + firstName, "Apellido: " + lastName, "Email: " + email);

});

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});