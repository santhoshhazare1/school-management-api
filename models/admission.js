
const mongoose = require('mongoose');

const admissionSchema = mongoose.Schema({
    fee:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    guardianName:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    admissionDate:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    previousSchool:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    idProof:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('Admission',admissionSchema);
