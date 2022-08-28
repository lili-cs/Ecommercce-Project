const express = require('express');
const Schema = require('mongoose').Schema;
const app = require('../app');
const router = express.Router();
const Product = require('../model/Product');
const Image = require('../model/Image');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
// require('dotenv').config();
// const bcrypt = require('bcryptjs');
// const  User  = require('../model/User');
// const Product = require('../model/Product');
const bodyParser = require('body-parser');

router.use(express.json());
router.use(bodyParser.urlencoded({extended:true}));
router.use(upload.array());


router.get('/products', async (req, res) => {
    Product.find({})
        .then(data => {
            // console.log(data);
            // res.send(data);
            // for(let product of data){
            //     console.log(typeof(product._id));
            //     product._id = product._id.toString();
            //     console.log(typeof(product._id.toString()));
            // }
            refinedData = data.map(product => {
                return {
                    id: product._id.toString(),
                    name: product.name,
                    brand: product.brand,
                    stock: product.stock,
                    thumbnail: product.thumbnail
                };
            });

            // let testData = [];
            // testData.push(                {
            //     "id": 1,
            //     "name": "a"
            // });

            // testData.push(                {
            //     "id":2,
            //     "name": "b"
            // });

            res.render('products', {data: refinedData});
        })
        .catch(err => {
            console.log(err);
        })
});


router.get('/products/:productId', async function(req, res) {
    const productId = req.params.productId;

    try{
        let productInfo = await Product.findById(productId);
        const product = {
            id: productInfo._id.toString(),
            name: productInfo.name,
            brand: productInfo.brand,
            stock: productInfo.stock,
            thumbnail: productInfo.thumbnail
        };

        // const testData = {
        //     id: 1,
        //     name: '1'
        // };

        // res.send(JSON.stringify(productId));
        res.render('productDetails', {product:product});
    }
    catch(err){
        
        console.log(`error with finding product ${productId}`);
    }

});

// //get all brands
// router.get('/products/brands', async (req, res) => {
//     Product.find({}, 'brand')
//         .then(data => {
//             const brands = new Set(data);
//             console.log(brands);
//             res.send(JSON.stringify([...brands]));
//         })
//         .catch()
// });

router.get('/products/:brand', async (req, res) => {
    const brand = req.params.brand;

    Product.find({brand: brand})
        .then(data => {
            res.send(JSON.stringify(data));
        })
        .catch(err => console.log(`error with finding products under brand ${brand}`))
});

router.post('/products/add', async (req, res) => {
    const { name, brand, stock} = req.body;

    //create new image
    const newImage = new Image ({
        file: {
            data: req.files[0].buffer,
            contentType: req.files[0].mimetype
        },
    });

    let newImageId = null;
    try{
        const data = await newImage.save();
        console.log(`save image ${req.body.fileName} to db succesfully`);
        // console.log(data);
        newImageId = data._id;
    }
    catch(err){
        console.log(`save image ${req.body.fileName} to db fail`);
    }

    //create new product
    const newProduct = new Product({
        name: name,
        brand: brand,
        stock: stock,
        thumbnail: newImageId
    });

    try{
        const result = await newProduct.save();
        console.log(`create new product succesfully`);
        res.status(200).send(`create new product succesfully`);
        console.log(result);
    }
    catch(err){
        console.log(err);
        res.status(500).send(`create new product fail`);
    }

});

module.exports = { productController: router};
