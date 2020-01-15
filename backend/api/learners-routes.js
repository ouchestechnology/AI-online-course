//Import express web framework for node.js
const express = require('express');

//Import bcrypt to hash password
const bcrypt = require('bcrypt');

//Import validator to valid incoming email address
const validator = require("email-validator");

//Initialize the router
const router = express.Router();

//Import users database schema
const User =  require('../models/userModel');

//This root route handle the submision of incoming registration data to the database
router.post('/', (req, res) => {
    const today = new Date;
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hash = bcrypt.hashSync(req.body.password, 10);
    const userData = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: hash,
        regDate: date,
        regTime: time,
    });
    if(validator.validate(req.body.email)){
        userData.save().then(
        saved => {
            console.log("Saved to database with a unique ID of: " + saved._id)
            res.status(200).json({
                success: true,
                id: saved._id,
                message: 'User created successfully!',
            })
        })
        .catch(error => {
            res.status(400).json({
                error,
                message: 'Unable to create user.',
            })
        })
    }else{
        res.status(400).json({
            message: 'Invalid email address',
        })
    }
});

//Handle get request for a single user based on thei specific ID
router.get('/:userId', (req, res) => {
    const uID = req.params.userId;
    User.findById(uID).select('firstname lastname username email age regDate regTime _id').then(
        result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({
            err,
            message: 'Unable to create user.',
        })
    })
});

//Export the module for use in other modules
module.exports = router