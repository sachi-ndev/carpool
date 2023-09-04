const mongoose= require('mongoose')

const connection = mongoose.model('city',new mongoose.Schema({
    city:String
}),'city'
)
module.exports=connection;