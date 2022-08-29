const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        // required: true,
        unique: true,
        ref: 'Product'
    },
    amount: {
        type: Number,
        min: [1, 'amount cannot be less than 1']
    }
});

const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        products: [ subSchema ]
    }
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;