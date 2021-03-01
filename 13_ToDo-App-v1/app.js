//jshint esversion:6

const express = require("express"); // required installed packages
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // this will require the module date.js
// console.log(date());

const app = express(); // app constant by using express

const items = ["Buy food", "Cook food", "Eat food"]; // a const which is an array admits to push items to it, just not assign it to a brand new array
const workItems = [];

app.set("view engine", "ejs"); // tells our app to use EJS as its view engine. Always after declaring "app".

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public")); // for express to serve up the public folder as a static resource

app.get("/", function (req, res) {
  //5th this happens and we render the list again and pass over the now updated array with all of our list items

  const day = date.getDate(); // we call the function in the required module date.js. "date" is the name of the module and "getDate" is the function.

  res.render("list", {
    // 1st we render the day and the list with the pre-selected items
    listTitle: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  // receives the post request from the html form

  const item = req.body.newItem; // search for the value of "newItem", that has to match our input
  // 4th this catches the post request, get the newItem and save is as item and push it into the items array, and then we redirect to the home route
  const listTitle = req.body.list;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/"); // when a post request is triggered, we'll save the value of the new item in the item variable and will redirect to the home route, where "app.get" and will render the list template passing in both kindOfDay and newList
  }
  console.log("item: " + item, "list title: " + listTitle);
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

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

// <!-- <% if (kindOfDay === "Saturday" || kindOfDay === "Sunday") { %>
//     <h1 style="color: purple"><%= kindOfDay %> ToDo list</h1>
//     <% } else { %>
//     <h1 style="color: blue"><%= kindOfDay %> ToDo list</h1>
//     <% } %> -->
