const mongoose = require('mongoose');

const ShoppingCart = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        discount: {
            type: Number,
            required: true
        },
        minQuantity: {
            type: Number,
            required: true
        },
        paid: {
            type: Boolean,
            default: false
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Products',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true, //TODO createAt and updateAt
        versionKey: false
    }
);

module.exports = mongoose.model('ShoppingCart', ShoppingCart);
