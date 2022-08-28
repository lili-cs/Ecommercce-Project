var express = require('express');
var router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const  Cart  = require('../model/Cart');
const User = require('../model/User');
const auth_jwt = require('../middleware/auth');

router.get('/cart/:userId', async function(req, res) {

});

router.post('/cart/add', auth_jwt, async (req, res, next) => {
    const userName = req.userName;
    const { amount, productId} = req.body;

    try{
        const user = await User.findById(userName);
        if(!user){
            throw new Error('the user does not exist');
        }
        const userId = user._id;

        const result = await Cart.find({user:userId});
        if(!result){
            throw new Error('cart for this user does not exist');
        }
        const cart = result[0];
        cart.products.push({product:productId, amount:amount});
        await cart.save();
    }
    catch(err){
        console.log(err);
    }


});

module.exports = { cartController: router};
