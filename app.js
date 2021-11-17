const express = require('express');
const mongoose = require('mongoose');
const app = express();
const studentRoute= require('./routes/students'); 
const facultyRoute=require('./routes/faculties');
const admissionRoute=require('./routes/admissions')

app.use(express.json());

app.use('/student',studentRoute); 
app.use('/faculty',facultyRoute);
app.use('/admission',admissionRoute);
mongoose.connect("mongodb://localhost:27017/school_db",()=>{ 

console.log("database connected") 
});

app.listen(3000);
