const express = require("express"); // require express
const https = require("https");
const url = require("./keys").url; // import weather api key from git-ignored file


const app = express(); // initialize a new express app

app.get("/", function (req, res) { // what happens when the user tries to go to my home page

    // without gitignore, we would declare the variable "url" here, with the api key

    https.get(url, function (response) {
        console.log("hey" + response.statusCode);
    });

    res.send("Server is up and running")
})

app.listen(3000, function () {
    console.log("The server is running on port 3000");
})