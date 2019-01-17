const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    phone:Number,
    password:String,
    role:Number
})

module.exports = mongoose.model('User',userSchema)