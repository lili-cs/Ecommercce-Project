var express = require('express');
var router = express.Router();
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const  Cart  = require('../model/Cart');
const User = require('../model/User');
// const Product = require('../model/Product');
const auth_jwt = require('../middleware/auth');
const  Order  = require('../model/Order');

// router.get('/orders', auth_jwt, async(req, res, next) => {
//     const userName = req.userName;
//     if(userName !== 'admin'){
//         res.status(401).send(JSON.stringify({
//             message: 'only admin account can access this page',
//             redirect: '/login'
//         }));
//     }
//     try{
//         const orders = await Order.find({status:'pending'});
//         res.render('orders', {orders:orders});
//     }
//     catch(err){
//         console.log(err);
//     }

// })

// router.post('/orders/add', auth_jwt, async (req, res, next) => {
//     const userName = req.userName;
//     const { recipient, email, phone, shipping, billing, payment, items } = req.body;

//     try{
//         const user = await User.find({userName:userName});
//         if(!user){
//             throw new Error('the user does not exist');
//         }
//         const userId = user[0]._id;

//         const order = new Order({
//             user: userId,
//             items: items,
//             recipient: recipient,
//             email: email,
//             phone: phone,
//             shipping: shipping,
//             billing: billing,
//             payment: payment
//         });

//         const result = await order.save();
//         res.status(200).send(JSON.stringify({
//             message: 'order created successfully'
//         }));
//     }
//     catch(err){
//         console.log(err);
//     }


// });

module.exports = { orderController: router};
