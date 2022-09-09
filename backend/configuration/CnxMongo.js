const mongoose=require('mongoose')
 const uriCompass = "mongodb://localhost:27017/FullStackMEARN"
 
 //const uriAtlas = "mongodb+srv://Fawez:fawez123@clusterprojectmern.olt8so8.mongodb.net/ma-societeDBC"
 mongoose.connect(uriCompass).then(()=> console.log("successful connexion DB"));
  
 module.exports=mongoose