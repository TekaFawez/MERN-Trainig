const express = require('express')
const mongoose = require('mongoose')

const app = express();

const cors = require('cors');
//hedha lazem taamlou bech maytblokech cors !!!!!
app.use(cors());
app.options('*', cors());


//middeleware

app.use(express.json()); //replace body-parser

const router = require('./routs/apiroutes')

app.use('/api', router);

 const uriCompass = "mongodb://localhost:27017/FullStackMEARN"



mongoose.connect(uriCompass).then(()=>
 console.log("successful connexion DB"));
 app.listen(7000, () => {

    console.log("the server is running http://localhost:7000")
})