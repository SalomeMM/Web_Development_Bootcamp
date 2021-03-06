// Mongo Server: start "mongod", quit CTRL + C

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert"); // assert has to do with testing

// Connection URL
const url = "mongodb://localhost:27017"; // standard port for mongo

// Database Name
const dbName = "fruitsDB"; // if this DB doesn't exist, it will create it

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  // if this fails, get mongodb server up and running with "mongod"

  const db = client.db(dbName);

  //   insertDocuments(db, function () {
  //     client.close();
  //   });

  // either insert or find documents, leave 1 commented out

  findDocuments(db, function () {
    client.close();
  });
});

//CREATE A NEW COLLECTION

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("fruits");
  // Insert some documents
  collection.insertMany(
    [
      {
        name: "Apple",
        score: 8,
        review: "Great fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda sour",
      },
      {
        name: "Banana",
        score: 9,
        review: "Great stuff!",
      },
    ],
    function (err, result) {
      assert.equal(err, null); // validate to make sure there are no errors
      assert.equal(3, result.result.n); // ensure that we have 3 results inserted into our collection
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection"); // if so, log this
      callback(result);
    }
  );
};

// GET OUR APP TO FIND OUR RECORDS, read data in our app.js file

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("fruits");
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
