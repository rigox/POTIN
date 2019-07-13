const mongoose =  require("mongoose")
const Schema =  mongoose.Schema

const profileSchema = new Schema({
  
    user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'users'
    },
    bio:{
         type:String
    },
    status:{
        type:String,
        required:true
    }
  ,
  date:{
       type:Date,
       default:new Date().toUTCString()
  }

});


const Profile =  mongoose.model("profiles",profileSchema)

module.exports = Profile