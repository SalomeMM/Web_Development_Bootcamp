//jshint esversion:6

const express = require("express"); // required installed packages
const bodyParser = require("body-parser");

const app = express(); // app constant by using express

var items = ["Buy food", "Cook food", "Eat food"];

app.set("view engine", "ejs"); // tells our app to use EJS as its view engine. Always after declaring "app".

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) { //5th this happens and we render the list again and pass over the now updated array with all of our list items

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { // 1st we render the day and the list with the pre-selected items
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function (req, res) { // receives the post request from the html form
    var item = req.body.newItem; // search for the value of "newItem", that has to match our input
// 4th this catches the post request, get the newItem and save is as item and push it into the items array, and then we redirect to the home route
    items.push(item);
    console.log(item);

    res.redirect("/"); // when a post request is triggered, we'll save the value of the new item in the item variable and will redirect to the home route, where "app.get" and will render the list template passing in both kindOfDay and newList

});

// res.redirect("/"); // when a post request is triggered, we'll save the value of the new item in the item variable and will redirect to the home route, where "app.get" and will render the list template passing in both kindOfDay and newList


// var currentDay = today.getDay();
// var day = "";

// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     default:
//         console.log("Error: current day is equal to: " + currentDay);
// }

//     res.render("list", {
//         kindOfDay: day
//     }); // render a file called list and pass that file a variable called kindOfDay whose value is "day"
// });

// app.get("/", function(req, res){

//     var today = new Date();
//     var currentDay = today.getDay();

//     if (currentDay === 6 || currentDay=== 0) { // getDay returns the day of the week, 0-Sunday to 6-Saturday
//         res.write("<h1>Yaaay it's the weekend!</h1>");
//     } else {
//         res.write("<p>It is not the weekend</p>");
//         res.write("<h1>Boo! I have to work!</h1>");
//         res.send();
//     }
// });

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});