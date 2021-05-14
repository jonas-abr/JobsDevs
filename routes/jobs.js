const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

router.get('/test', (req, res) => {
    res.send('deu certo');
})

// add job via post
router.post('/add', (req, res) => {

    let{ TITLE, SALARY, COMPANY, DESCRIPTION,EMAIL, NEW_JOB} = req.body;

    // insert 
    Job.create({
        TITLE,
        DESCRIPTION,
        SALARY,
        COMPANY,
        EMAIL,
        NEW_JOB
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router