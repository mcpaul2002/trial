const express = require('express');
const router = express.Router();

//GET homepage.
router.get('/', function(req, res, next) {
    res.render('index');
});

//GET rules
router.get('/rules', function(req, res, next) {
    res.render('rules');
});

//GET about
router.get('/about', function(req, res, next) {
    res.render('about');
});

//GET private
router.get('/private', function(req, res, next) {
    res.render('private');
});


module.exports=router;