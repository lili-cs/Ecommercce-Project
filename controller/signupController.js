var express = require('express');
var router = express.Router();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const  User  = require('../model/User');
const Cart = require('../model/Cart');
// const Order = require('../model/Order');

router.get('/signup', async function(req, res) {
    res.render('signup');
});

router.post('/signup', async function(req, res) {
    const {userName, password, email} = req.body;

    const results = await User.findOne({userName:userName});
    if(results){
        return res.send(JSON.stringify({
            message: 'user already exist',
            redirect: '/signup'
        }));
    }

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const newUser = new User(
        {
            userName: userName,
            password: hashedPassword,
            email: email,
            // cart: null,
            // orders: []
        }
    );

    try{
        const result = await newUser.save();
        const newUserId = result._id;

        const newCart = new Cart({
            user: newUserId,
            products: []
        });

        await newCart.save();

        console.log('sign up successfully')
        res.status(200).send(JSON.stringify({
            message: 'sign up successfully',
            redirect: '/login'
        }));
    }
    catch(err){
        console.log('create new user failed');
        res.status(500).send(JSON.stringify({
            message: 'sign up failed due db error',
            redirect: '/signup'
        }));
    }
});

module.exports = { signupController: router};
