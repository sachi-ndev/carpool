const express=require('express')
const mongoose= require('mongoose')
const city=require('./mongos')
const cors=require('cors')

const app =express()
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Amigos")
.then(()=>{

    app.listen(3000,()=>{
        console.log("Connected");
    })

})
app.get('/city',async (req,res)=>{
    const cities=await city.find()
    res.send(cities)

})