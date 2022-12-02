const mongoose = require('mongoose');

const CommentScheme = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true, //TODO createAt and updateAt
        versionKey: false
    }
);

module.exports = mongoose.model('Comments', CommentScheme);