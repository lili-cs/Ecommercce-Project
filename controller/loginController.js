const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/User');
require('dotenv').config();

router.get('/login', async function(req, res) {
  res.render('login');
});

router.post('/login', async function(req, res) {
  try{
    const {userName, password} = req.body;
    const user = await User.findOne({userName});

    if(!user){
      console.log('username does not exsit');
      return res.status(401).send(JSON.stringify({
        message: 'User name not existe',
        redirect: '/signup'
      }));
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual){
      console.log('user name and password do not match');
      return res.status(401).send(JSON.stringify({
        message: 'User name and password do not match.',
        redirect: '/login'
      }))
    }
    else{
      const signed_jwt = jwt.sign(req.body, process.env.JWT_SECRET_KEY);
      res.setHeader('JWT', signed_jwt);

      console.log('login successfully');

      return res.status(200).send(JSON.stringify({
        message: 'login successfully',
        redirect: '/products'
      }));
    }
  }
  catch(err){
    console.log(err);
  }
});

module.exports = { loginController: router};
