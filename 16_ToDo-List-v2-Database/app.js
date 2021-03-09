//jshint esversion:6
// const mongoDBKey = require("./.env").mongoDBKey; // import mongo key from gitignored file
// const mongoDBUser = require("./.env").mongoDBUser;

// const aws = require('aws-sdk');

// let mongoKeys = new aws.S3({
//   mongoHerokuKey: process.env.mongoDBKey,
//   mongoHerokuUser: process.env.mongoDBUser
// });

// console.log(mongoKeys.mongoHerokuUser);

// let mongoHerokuKey = process.env.mongoDBKey;
// let mongoHerokuUser = process.env.mongoDBUser;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var _ = require("lodash");
require('dotenv').config({ path: './.env' });

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose.connect("mongodb+srv://" + mongoDBUser + ":" + mongoDBKey + "@cluster0.oiiop.mongodb.net/todolistDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

var url = process.env.MONGOLAB_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect("mongodb+srv://" + mongoKeys.mongoHerokuUser + ":" + mongoKeys.mongoHerokuKey + "@cluster0.oiiop.mongodb.net/todolistDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });
});

app.get("/:customListName", function (req, res) {
  const customListName = _capitalize(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list; // list is the name of the button on list.ejs

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    // default list
    item.save(); // mongoose shortcut to "insertOne" or Many
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName); // this will take to app.get :customListName and render all items
    });
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndDelete(checkedItemId, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully deleted the checked item.");
        res.redirect("/");
      }
    });
  } else { // if it not the default list

    List.findOneAndUpdate({ name: listName }, { $pull: {items: {_id: checkedItemId}} }, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully.");
});
