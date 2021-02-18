const express = require("express"); // require express
const https = require("https");
const url = require("./keys").url; // import weather api key from git-ignored file


const app = express(); // initialize a new express app

app.get("/", function (req, res) { // what happens when the user tries to go to my home page
    // without gitignore, we would declare the variable "url" here, with the api key

    https.get(url, function (response) {
        console.log("status code: " + response.statusCode);

        response.on("data", function (data) {
            // console.log(data); //will show hexadecimal code for the json data. It would be more useful to have a JS object, like this:
            const weatherData = JSON.parse(data) // recreate js object with JSON.parse.
            // const exampleObject = {
            //     name: "Jane",
            //     favouriteFood: "Sushi"
            // }
            // JSON.stringify(exampleObject); // does the opposite of JSON.parse: turn js object into a string.
            // console.log(exampleObject);
            const temp = weatherData.main.temp; // extract specific pieces of information, e.g. temperature. chrome extension "json viewer pro" HELPS getting full paths.
            const weatherDescription = weatherData.weather[0].description; // extract specific pieces of information, e.g. temperature. chrome extension "json viewer pro" HELPS getting full paths.
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            res.write("<p>The weather is currently " + weatherDescription + ".</p>")
            res.write("<h1>The temperature is " + temp + " degrees Celsius.</h1>")
            res.write("<img src=" + iconUrl + ">")
            res.send();
        })
    });

    // res.send("Server is up and running") // there can only be 1 res.send in any app method.
})

app.listen(3000, function () {
    console.log("The server is running on port 3000");
})