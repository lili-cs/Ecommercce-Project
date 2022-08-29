const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//status for products added to order
// const productOrderStatusSchema = new Schema(
//     {
//         order: {
//             type: Schema.Types.ObjectId
//         },
//         product: {
//             type: Schema.Types.ObjectId
//         },
//         status: {
//             type: String,
//             required: true,
//             enum: {
//                 values: ['Pending', 'Approved', 'Rejected'],
//                 message: '{VALUE} is not supported'
//             }
//         }
//     }
// );

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId
        },
        createdTime: {
            type: Date, 
            require: true,
            default: Date.now
        },
        items: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product'
                },
                amount: {
                    type: Number,
                    required: true,
                    min: [1, 'amount cannot be less than 1']
                }
            }
        ],
        status: {
            type: String,
            required: true,
            enum: {
                values: ['Pending', 'Approved', 'Rejected'],
                message: '{VALUE} is not supported'
            },
            default: 'Pending'
        },
        recipient: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        shipping:{type: String},
        billing: {type: String},
        payment: {type: String}
    }
);


// const productOrderStatus = mongoose.model('productOrderStatus', productOrderStatusSchema);
const Order = mongoose.model( 'Order', orderSchema);
module.exports = Order;