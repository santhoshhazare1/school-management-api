const express = require('express');
const router = express.Router();
const Faculty = require('../models/faculty');



router.get('/', async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.json(faculty);
      console.log(faculty,'student_data')
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', (req, res) => {
    const faculty = new Faculty({
        name: req.body.name,
        subject: req.body.subject,
        address: req.body.address,
        qualification: req.body.qualification,
        contactNumber: req.body.contactNumber
      
    })
    faculty.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
})

module.exports = router;
