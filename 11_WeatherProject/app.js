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
            console.log(weatherData);
            // const exampleObject = {
            //     name: "Jane",
            //     favouriteFood: "Sushi"
            // }
            // JSON.stringify(exampleObject); // does the opposite of JSON.parse: turn js object into a string.
            // console.log(exampleObject);

            const temp = weatherData.main.temp; // extract specific pieces of information, e.g. temperature. chrome extension "json viewer pro" HELPS getting full paths.
            console.log(temp);

            const weatherDescription = weatherData.weather[0].description; // extract specific pieces of information, e.g. temperature. chrome extension "json viewer pro" HELPS getting full paths.
            console.log(weatherDescription);
            res.send("The temperature is " + temp + "°C.")
        })
    });

    // res.send("Server is up and running") // there can only be 1 res.send in any app method.
})

app.listen(3000, function () {
    console.log("The server is running on port 3000");
})