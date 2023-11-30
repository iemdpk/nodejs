const express = require('express')
const router = express.Router()
var uuid = require("uuid");
const { MongoClient } = require("mongodb");


const uri = "mongodb+srv://deepakmishra:aW5478901@snatched.uad3ly3.mongodb.net";
const client = new MongoClient(uri);
let main = client.db("Dhode").collection("authentication");

router.get('/registration',async (req, res) => {
  var number = req.query.number;
  var contact_number = req.query.contact_number;
  var special_id = uuid.v1();
  var data = {special_id:special_id,number:number};
  var check = await main.insertOne(data);
  res.send(check);
});

router.get('/login',async (req, res) => {
  var number = req.query.number
  var data = await main.find({number:number},{}).toArray();
  res.send(data);
});
  

module.exports = router
