var express = require('express');
var router = express.Router();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const  User  = require('../model/User');

router.post('/signup', async function(req, res) {
    const {userName, password, email} = req.body;
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const newUser = new User(
        {
            userName: userName,
            password: hashedPassword,
            email: email,
            cart: null,
            orders: []
        }
    );

    try{
        const result = await newUser.save();
        console.log('sign up successfully')
        res.status(200).send(JSON.stringify({
            message: 'sign up successfully',
            redirect: '/login'
        }));
    }
    catch(err){
        console.log('create new user failed');
        res.status(500).send(JSON.stringify({
            message: 'sign up failed due to server db error.',
            redirect: '/signup'
        }));
    }
});

module.exports = { signupController: router};
