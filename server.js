const  express = require("express")
const db =  require("./config/db")
const app = express()
const cors =  require("cors")
const PORT =  process.env.PORT || 2005;
//import routes
const User =  require("./routes/api/User");
const Auth =  require("./routes/api/Auth");
//middleware setup
db();
app.use(express.urlencoded(),express.json())
app.use(cors())



//setup routes
app.use("/User",User)
app.use("/Auth",Auth)



app.listen(PORT, ()=>{
     console.log(`listening on port ${PORT}`)
})