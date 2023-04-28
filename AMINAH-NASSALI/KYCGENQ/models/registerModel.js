const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    dob:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    district:{
        type:String,
        trim:true
    },
    
    phoneNumber1:{
        type:Number,
        trim:true
    },
    phoneNumber2:{
        type:Number,
        trim:true
    },
    
    email:{
        type:String,
        trim:true
    }
})
module.exports = mongoose.model("register", registerSchema)
