//jshint esversion: 6

const apiKey = require("./keys").apiKey; // import mailchimp api key from git-ignored file
const apiUrl = require("./keys").apiUrl; // import weather api key from git-ignored file

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const {
    post
} = require("request");

const app = express();

app.use(express.static("public")); //special express function that creates a static folder (public) and provides the path to it.
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    const jsonData = JSON.stringify(data); // turn these data into a string

    const url = apiUrl;

    const options = {
        method: "POST",
        auth: "salome1:" + apiKey,
    };

    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res){
    res.redirect("/");
});
// when "try again" button clicked: triggers post request to the failure route and that is gonna be caught by our server and redirect to the signup page


app.listen(process.env.PORT || 3000, function () { // dynamic port that Heroku will define on the go and/or listen on 3000
    console.log("The server is running on port 3000");
});

// static port
// app.listen(3000, function () {
//     console.log("The server is running on port 3000");
// });

// procfile is how heroku knows how to launch this app