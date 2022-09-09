const express = require('express')
require('./configuration/CnxMongo')

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



 app.listen(4000, () => {

    console.log("the server is running http://localhost:4000")
}) 