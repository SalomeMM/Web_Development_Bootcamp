// Mongo Server: start "mongod", quit CTRL + C

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true, // deprecation warnings
  useNewUrlParser: true,
});

// Create our schema: blueprint or structure of our data into our MongoDB db:

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// use the schema to create a mongoose model:

const Fruit = mongoose.model("Fruit", fruitSchema); // mongoose will pluralize "Fruit" to name our collection

const Person = mongoose.model("Person", personSchema); // mongoose will pluralize "Fruit" to name our collection

// create a new object/fruit: (replaces native insert model)

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});
// fruit.save(); // save this fruit document into a "Fruits" collection inside our "fruitsDB"

const person = new Person({
  name: "John",
  age: 37,
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit.",
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me.",
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture.",
});

// name of the mongoose model + insertMany + array of objects + callback for error
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// read: (replaces native findDocuments model)

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close(); // closes the connection when this is done

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
