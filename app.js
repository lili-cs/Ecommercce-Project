const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const { loginController } = require('./controller/loginController');
const { signupController } = require('./controller/signupController');
const { productController } = require('./controller/productController');
// const { cartController } = require('./controller/cartController');
// const { orderController } = require('./controller/orderController');

app.options('*', cors());
// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

app.use(signupController);
app.use(loginController);
app.use(productController);
// app.use(cartController);
// app.use(orderController);
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', async (req, res) => {
  // res.sendFile('home.html', {root: publicFolder});
  res.redirect('/products');
});

module.exports = app;
