const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;