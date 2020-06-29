//require express
const express = require('express')
//import router
const router = express.Router();
//import db
const db = require('../models')
//import middleware

const flash= require('flash')


//ROUTES
//register GET route
router.get('/register', function(req, res) {
    res.render('auth/register')
})
//register POST route
router.post('/register', function(req, res) {
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function([user, created]) {
        //if user was created
        if (created) {
            //authenticate user and start authorization process
            console.log('user created!');
            res.redirect('/')
        } else {
            console.log('user email already exists')
            //else if user already exists
             //send error to user that email already exists
            req.flash('error', 'Error: email already exists for user. Try again.')
            //redirect to register get route
            res.redirect('/auth/register');
        }
    }).catch(function(err) {
        console.log(`Error found. \nMessage: ${err.message}. \nPlease review: ${err}`);
        req.flash('error', err.message);
        res.redirect('/auth/register');
    })
})

//login GET route
router.get('/login', function(req, res) {
    res.render('auth/login');
})
//login POST route

//export router
module.exports = router;
