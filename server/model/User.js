const mongoose = require("mongoose")
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String,
    },
    type:{
        enum:["Patient","Doctor"]
    }
})
const userModel= new mongoose.model("User",userSchema)
module.exports=userModel