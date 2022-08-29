var express = require('express');
var router = express.Router();
const User = require('../model/User');


router.get('/users', async function(req, res) {
    const users = await User.find({}, 'userName email');
    res.render('users', {users: users});
});

module.exports = { userController: router};
