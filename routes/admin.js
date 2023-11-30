const express = require('express')
const router = express.Router()
var uuid = require("uuid");
const { MongoClient } = require("mongodb");
const { S3Client } = require('@aws-sdk/client-s3')

const multer = require('multer')
const multerS3 = require('multer-s3')


const uri = "mongodb+srv://deepakmishra:aW5478901@snatched.uad3ly3.mongodb.net";
const client = new MongoClient(uri);
let main = client.db("Dhode").collection("authentication");

const s3 = new S3Client({
    credentials: {
        accessKeyId: "AKIASRI7C2GE6PXOHKDY", 
        secretAccessKey: "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"
    },
region: "ap-south-1"})


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'dhode',
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

router.post('/upload_data',upload.single('file'),async (req,res,next)=>{
    res.send("This is File "+req.file.location);
});  

module.exports = router

