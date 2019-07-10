const  mongoose = require("mongoose")
const  schema =  mongoose.schema

const  userSchema =  new schema({

name:{
      type:String,
      required:true
},
email:{
     type:String,
     required:true
},
password:{
     type:password,
     required:true
},

dateCreated:{
  type:Date,
  default:new Date().toUTCString()  
}
})

const User = mongoose.model("users",userSchema)

module.exports =  User;