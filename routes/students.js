const express = require('express');
const router = express.Router();
const Student = require('../models/student');



router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
     
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', (req, res) => {
    const students = new Student({
        name: req.body.name,
        section: req.body.section,
        address: req.body.address,
        class: req.body.class,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        dob: req.body.dob,
        admissionNumber: req.body.admissionNumber,
        guardianName: req.body.guardianName,
        contactNumber: req.body.contactNumber,
      
    })
    students.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
})

module.exports = router;
