const express = require("express")
const  router =  express.Router()
const Profile =  require("../../models/Profile")
const User =  require("../../models/User")
const auth = require("../../middleware/auth")
const  {check,validationResult}   =  require('express-validator/check')
const config =  require("config")
const form =  require("formidable")
const media =   require("mediaserver")
const fs =  require("fs")

//@router GET api/profile/me
//@desc get current user profile
//@access Public

router.get("/me",auth,async (req,res)=>{
      try {
          profile  =  await  Profile.findOne({user:req.user.id}).populate('user',['name','email'])
 
          if(!profile){
            return res.status(400).json({msg:"there is no profile for this user"})
      }

      res.json(profile)
        } catch (err) {
          console.log(err.message)
          res.status(500).send("server error")
      }
});


//@router Post api/profile/
//@desc P create or update a  users profile
//@access Private

router.post("/",[auth,
check("status","status is required").not().isEmpty(),
check("bio","bio is required").not().isEmpty()
], async (req,res)=>{
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
          return  res.status(400).json({erros: errors.array()})
    }
  const {bio,status} = req.body || req.status;
  const propFields  ={}
  propFields.user =  req.user.id
 if(bio) propFields.bio =  bio
 if(status) propFields.status =  status 
 console.log("here",propFields)

 try {
     let profile =  await Profile.findOne({user:req.user.id})
        if(profile){
            profile  = await Profile.findByIdAndUpdate(
                {user:req.user.id},
                {$set:propFields},
                {new:true}
            );
            return res.json(profile);
            }
        //create a profile
        profile = new Profile(propFields)
        await profile.save()
        res.json(profile);
    } catch (err) {
     console.log(err.message)
     res.status(500).send("server error")
 }

 });
//@router GET api/profile
//@desc gets all profiles
//@access Public

router.get('/',async (req,res)=>{
   try {
       const profiles  =  await Profile.find().populate('users','name')
       console.log(profiles)
       res.json(profiles)
    }catch(err){
       console.log(err.message)
       res.status(500).send("server error")
   }
});
//@router GET api/Profile/user/:user_id
//@desc gets  profile by user  id
//@access Public
router.get("/user/:user_id",async(req,res)=>{
        try {
            const profile = await Profile.findOne({user:req.params.user_id}).populate('user',['name','email'])
            if(!profile) return res.status(400).json({msg:"there is no profile for this user"})
            res.json(profile)
        } catch (err) {
            console.log(err.message)
            res.status(500).send("Server error")
        }
});

//@router Delete api/Profile/delete
//@desc deletes profile by using a token
//@access Private
router.delete("/",auth,async(req,res)=>{
     try {
          await   Profile.findOneAndRemove({user:req.user.id})
          //removes user
          await  User.findOneAndRemove({_id:req.user.id})
            res.json({msg:"user deleted"})
        } catch (err) {
          console.log(err)
          res.status(500).send("server error")
     }
})

//@router Post api/Profile/change_photo
//@desc uploads a user photo to the media  folder
//@access Private

router.post("/change_photo",auth, (req,res)=>{
     let f = new form.IncomingForm()
     f.parse(req,(err,fields,files)=>{
         if(err) throw err;
        var path =  __dirname + '/pictures/'+files.profile_photo.name;
        const readStream = fs.createReadStream(files.profile_photo.path)
        const writeStream =  fs.createWriteStream(path)
        readStream.pipe(writeStream)
     })

});


 module.exports = router;