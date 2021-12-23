const express = require("express")
const app = express()
const cors = require("cors")
const wokroutsRouter = require("./workouts/workouts.router")
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

app.use(express.json())
app.use(cors())
app.use("/workouts", wokroutsRouter)
app.get("/",(req,res,next)=>{
    res.send("welcome to the workouts api. please navigate to '/workouts'.")
})
app.use(notFound)
app.use(errorHandler)
module.exports = app