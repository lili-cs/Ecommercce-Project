const jwt = require('jsonwebtoken');

const auth_jwt = (req, res, next) => {
    console.log(`JWT middleware before route ${req.url}`);
    const token = req.header('JWT');

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userName = decoded.userName;
        next();
    }
    catch(err){
        console.log(err);
        next(err);
        res.status(401).send(JSON.stringify(
            {
                message: 'user not authorized',
                redirect: '/login'
            }
        ));
    }
};

module.exports = auth_jwt;