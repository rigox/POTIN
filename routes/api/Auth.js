const  User =  require("../../models/User");
const express = require("express")
const  router =  express.Router()
const jwt =  require("jsonwebtoken")
const bcrypt =  require("bcryptjs")
const config =  require("config")
const  {check,validationResult}   =  require('express-validator/check')

router.get('/',(req,res)=>{
       res.send("Auth test")
})

router.post("/login",[
  check("email","email is required").not().isEmpty(),
  check("password","password is required").not().isEmpty()
],async(req,res)=>{
     const errors = validationResult(req)
     if(!errors.isEmpty()){
          return res.status(400).json({errors:errors.array()})
     }
     const {email , password} = req.body || req.query
     try {
         let  user =  await User.findOne({email}) 
         if(!user){
              return res.status(400).json({msg:"invalid credentials"})
         }
         isMatch = await  bcrypt.compare(password,user.password)
         if(!isMatch){
            return res.status(400).json({msg:"invalid credentials"})
         }
         const payload = {
              user:{
                  id:user.id
              }
         }
            jwt.sign(payload,config.get("jwtSecret"),{expiresIn:360000},(err,token)=>{
                if(err){throw err}
                res.json({token})
            })

     } catch (err) {
         console.log(err)
         res.status(500).send("server error")

     }

})



module.exports =  router;
