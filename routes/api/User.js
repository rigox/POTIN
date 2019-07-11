const User =  require("../../models/User")
const  jwt =  require("jsonwebtoken")
const config =   require("config")
const bcrypt =  require("bcryptjs")
const express =  require("express")
const router = express.Router();
const  {check,validationResult}   =  require('express-validator/check')
router.get("/",(req,res)=>{

  res.send("welcome")

});

//@router POST api/User/register
//@desc  Register  Users
//@access Public

router.post("/register",[
    check("name","name is required").not().isEmpty(),
    check("email","email is required").isEmail(),
    check("password","length must be greater than 6").isLength({min:6})
], async (req,res)=>{
     const  errors = validationResult(req)
     if(!errors.isEmpty()){
           return res.status(400).json({errors:errors.array()})
     } 
   const {name,email,password}   = req.body || req.query
   
   try {
       let temp = await  User.findOne({email})
       if(temp){
             return res.status(400).json({msg:"user already exists"})  
       }

     user =  new User({
            name,
            email,
            password
    });

    const salt  = await bcrypt.genSalt(10)
    user.password =  await  bcrypt.hash(password,salt)
    await user.save();


    const payload = {
        user:{
             id:user.id
        }
  }

  jwt.sign(payload,config.get("jwtSecret"),{expiresIn:360000},(err,token)=>{
       if(err){throw err}
       res.json({ token })
      })

   }catch (err) {
         console.log(err.message)
         res.status(500).send("server error")
   }
})



module.exports = router;

