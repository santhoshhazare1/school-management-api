const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    }
   
    
})

module.exports= mongoose.model('Faculty',facultySchema);