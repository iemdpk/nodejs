const express = require('express')
const app = express()
const port = 3005;
const axios = require('axios');
var cors = require('cors')
var mongoose = require('mongoose');


app.use(cors())
app.use('/auth',require('./routes/auth'));
app.use('/admin',require('./routes/admin'));

app.get('/',(req,res)=>{
    res.send("Server is Running working");
});




app.listen(port);
