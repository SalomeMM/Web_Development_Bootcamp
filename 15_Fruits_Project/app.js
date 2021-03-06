const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); // assert has to do with testing

// Connection URL
const url = 'mongodb://localhost:27017'; // standard port for mongo

// Database Name
const dbName = 'fruitsDB'; // if this DB doesn't exist, it will create it

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
    console.log("Connected successfully to server");
    // if this fails, get mongodb server up and running with "mongod"

  const db = client.db(dbName);

  client.close();
});