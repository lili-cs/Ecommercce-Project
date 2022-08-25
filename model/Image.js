const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    fileName: {
        type: String,
        default: ''
    }, 
    file: {
        data: Buffer,
        contentType: String
    },
    uploadTime: {
        type: Date,
        default: Date.now
    }
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;