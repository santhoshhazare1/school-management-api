const express = require('express');
const router = express.Router();
const Admission = require('../models/admission');
const Student = require('../models/student');



router.get('/', async (req, res) => {
    try {
        const admission = await Admission.find();
        res.json(admission);
      console.log(admission,'admission')
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', (req, res) => {
    const admission = new Admission({
        fee: req.body.user.fee,
        studentName: req.body.user.studentName,
        guardianName: req.body.user.guardianName,
        admissionDate: req.body.user.admissionDate,
        dob: req.body.user.dob,
        type:req.body.user.type,
        previousSchool: req.body.user.previousSchool,
        bloodGroup:req.body.user.bloodGroup,
        idProof:req.body.user.idProof,
        contactNumber:req.body.user.contactNumber,
        gender:req.body.user.gender,
        class:req.body.user.class,
        address:req.body.user.address
      
    })
    console.log(req.body.user,'admission================>')
    console.log(admission,'admission================>222222')
   const ad= admission.save().then(data => {
        res.json(data);
        console.log(data,'admission================>3333333')
        const student = new Student({
            name: admission.studentName,
            class: admission.class,
            gender: admission.gender,
            bloodGroup: admission.bloodGroup,
            dob: admission.dob,
            guardianName: admission.guardianName,
            contactNumber: admission.contactNumber,
            address: admission.address
        })
        student.save(); 
    }).catch(err => {
        res.json({ message: err });
    })
console.log(admission,'admission object');


})

module.exports = router;
