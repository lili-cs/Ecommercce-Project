const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        // id: {
        //     type: String,
        //     unique: true,
        //     get: function() {
        //         return this._id.toString();
        //     }
        // },
        name: {
            type: String, required: true
        },
        brand: {
            type: String, 
            required: true
        },
        stock: {
            required: true,
            type: Number,
            min: [0, 'The stock cannot be negative']
        },
        thumbnail: { // reference to image
            required: true,
            type: Schema.Types.ObjectId
            // ref: 'Image'
        }
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;