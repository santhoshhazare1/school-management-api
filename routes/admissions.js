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
        fee: req.body.fee,
        studentName: req.body.studentName,
        guardianName: req.body.guardianName,
        admissionDate: req.body.admissionDate,
        dob: req.body.dob,
        type:req.body.type,
        previousSchool: req.body.previousSchool,
        bloodGroup:req.body.bloodGroup,
        idProof:req.body.idProof,
        contactNumber:req.body.contactNumber,
        gender:req.body.gender,
        class:req.body.class,
        address:req.body.address
      
    })
   const ad= admission.save().then(data => {
        res.json(data);
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
