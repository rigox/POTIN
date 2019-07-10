const mongoose = require("mongoose")
const config =  require("config")
const uri = config.get("mongoURI")

const connectDB= async()=>{

     try {
           await mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false}) 

     } catch (err) {
          console.log(err)
     }

}

module.exports  = connectDB;