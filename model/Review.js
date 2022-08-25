const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId
        },
        product: {
            type: Schema.Types.ObjectId
        },
        rating: {
            type: String,
            required: true,
            enum: {
                values: [1, 2, 3, 4, 5],
                message: '{VALUE} is not supported'
            }
        },
        comments: [
            {
                type: String
            }
        ]
    }
);

const Review = mongoose.model('Review', userSchema);
module.exports = Review;