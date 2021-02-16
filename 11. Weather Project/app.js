const express = require("express"); // require express

const app = express(); // initialize a new express app

app.get("/", function(req, res){ // what happens when the user tries to go to my home page
res.send("Server is up and running");
}) 




app.listen(3000, function(){
    console.log("The server is running on port 3000");
})