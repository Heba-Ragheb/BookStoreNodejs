const express = require("express")
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const uri = "mongodb+srv://hebaragheb:hg672002@firstone.srtc7t6.mongodb.net/?retryWrites=true&w=majority&appName=firstOne";
const userRouter = require('./Routers/user')
const bookRouter = require('./Routers/book')
const app = express()
app.use(bodyParser.json())

const conectDB = async ()=>{
    try {
        mongoose.set('strictQuery',false)
        mongoose.connect(uri)
        console.log("connected")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}
conectDB()
app.use('/',bookRouter)
app.use('/',userRouter)
app.use(function(req,res){
    res.status(404).send({uri:req.originalUrl + 'not found'})
})

app.listen(3000)