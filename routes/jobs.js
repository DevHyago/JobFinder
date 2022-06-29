const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

//Rota de teste
router.get('/test', (req, res) => {
    res.send('Deu certo');
})

//Router POST add job
router.post('/add', (req, res) => {

    let {title, salary, company, description, email, new_job} = req.body;

    //Insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.error('Erro ao criar Job ', err);
    });

});


module.exports = router;