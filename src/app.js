const express = require("express")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())
app.get("/",(req,res,next)=>{
    res.send("welcome to your workouts data")
})
module.exports = app