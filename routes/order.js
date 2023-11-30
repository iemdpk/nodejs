const express = require('express')
const router = express.Router()
var uuid = require("uuid");
const { MongoClient } = require("mongodb");


const uri = "mongodb+srv://deepakmishra:aW5478901@snatched.uad3ly3.mongodb.net";
const client = new MongoClient(uri);
let main = client.db("Dhode").collection("order");

router.get('/insert_order',async (req, res) => {
  var cart = req.query.cart;
  var special_id = req.query.special_id;
  var data = {special_id:special_id,cart:cart};
  var check = await main.insertOne(data);
  res.send(check);
});
  

module.exports = router
