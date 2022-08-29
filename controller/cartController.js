var express = require('express');
var router = express.Router();
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const  Cart  = require('../model/Cart');
const User = require('../model/User');
// const Product = require('../model/Product');
const auth_jwt = require('../middleware/auth');

router.get('/cart/:userName', async function(req, res){
    const userName = req.params.userName;

    try{
        const user = await User.find({userName:userName});
        const userId = user[0]._id;

        const result = await Cart.find({user:userId}).populate({
            path: 'product', 
            strictPopulate: false, 
            select: 'name brand'
        });

        if(!result){
            throw new Error('cart for this user does not exist');
        }
        const cart = result[0];
        const products = cart.products;
        res.render('cart', {products: products, userName: userName});
    }
    catch(err){
        console.log(err);
    }
});

router.get('/cart', auth_jwt, async function(req, res) {
    const userName = req.userName;
    res.send(JSON.stringify({
        userName: userName
    }));
});

router.post('/cart/add', auth_jwt, async (req, res, next) => {
    const userName = req.userName;
    const { amount, product} = req.body;

    try{
        const user = await User.find({userName:userName});
        if(!user){
            throw new Error('the user does not exist');
        }
        const userId = user[0]._id;

        const result = await Cart.find({user:userId});
        if(!result){
            throw new Error('cart for this user does not exist');
        }
        const cart = result[0];
        cart.products.push({product:product, amount:amount});
        await cart.save();
        console.log('Add to cart successfully');
        res.status(200).send(JSON.stringify({
            message: 'Add to cart successfully'
        }));
    }
    catch(err){
        console.log(err);
    }


});

module.exports = { cartController: router};
