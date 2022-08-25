const express = require('express');
// const Schema = require('mongoose').Schema;
// const app = require('../app');
const router = express.Router();
const Image = require('../model/Image');
// const Image = require('../model/Image');
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage});

// const bodyParser = require('body-parser');

// router.use(express.json());
// router.use(bodyParser.urlencoded({extended:true}));
// router.use(upload.array());


router.get('/images/:imageId', async (req, res) => {
    const imageId = req.params.imageId;

    Image.findById(imageId)
        .then(data => {
            console.log(data);
            // res.type(data.img.contentType).send(data.img.data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
});


module.exports = { imageController: router};
