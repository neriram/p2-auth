//require express
const express = require('express')
//import router
const router = express.Router();
//import db
const db = require('../models')
//import middleware


//ROUTES
//register GET route
router.get('/register', function(req, res) {
    res.render('auth/register')
})
//register POST route
router.post('')
//login GET route
router.get('/login', function(req, res) {
    res.render('auth/login');
})
//login POST route