const express = require("express"); // require express
const https = require("https");

const app = express(); // initialize a new express app

app.get("/", function (req, res) { // what happens when the user tries to go to my home page

    const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=57b3808da7a08764de3a87288de77391&units=metric";

    https.get(url, function (response) {
        console.log(response);
    });

    res.send("Server is up and running")
})

app.listen(3000, function () {
    console.log("The server is running on port 3000");
})