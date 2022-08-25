const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName: {
            type: String, unique: true
        },
        email: {
            type: String, unique: true
        },
        password: String,
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'Cart'
        },
        orders: [
            {
                type: Schema.Types.ObjectId
            }
        ]
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;