const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type: String,
        required:false
    },
    class:{
        type:String,
        required:true
    },
    section:{
       type:String,
       required:false 
    },
    gender:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    admissionNumber:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:true
    },
    guardianName:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('Student',studentSchema);