const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const ProductScheme = new mongoose.Schema(
    {
        code: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        // type: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Types'
        // },
        price: {
            type: Number,
            required: true
        },
        iva: {
            type: Number
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        calification: {
            type: Number
        }
    },
    {
        timestamps: true, //TODO createAt and updateAt
        versionKey: false
    }
);
ProductScheme.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Products', ProductScheme);