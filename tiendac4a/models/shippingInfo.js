const mongoose = require('mongoose');

const ShippingInfoScheme = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        shoppingCart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ShoppingCart',
            required: true
        },
        address: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true, //TODO createAt and updateAt
        versionKey: false
    }
);

module.exports = mongoose.model('ShippingInfo', ShippingInfoScheme);
