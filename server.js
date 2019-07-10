const  express = require("express")
const db =  require("./config/db")
const app = express()
const cors =  require("cors")
const PORT =  process.env.PORT || 2005;


//middleware setup
db();
app.use(express.urlencoded(),express.json())
app.use(cors())



//setup routes






app.listen(PORT, ()=>{
     console.log(`listening on port ${PORT}`)
})