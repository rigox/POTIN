const  express = require("express")
const db =  require("./config/db")
const app = express()
const cors =  require("cors")
const PORT =  process.env.PORT || 2005;
db();
//import routes
const User =  require("./routes/api/User");
const Auth =  require("./routes/api/Auth");
const Profile = require("./routes/api/Profile");
//middleware setup
app.use(express.urlencoded(),express.json())
app.use(cors())



//setup routes
app.use("/api/User",User)
app.use("/api/Auth",Auth)
app.use("/api/Profile",Profile)


app.listen(PORT, ()=>{
     console.log(`listening on port ${PORT}`)
})