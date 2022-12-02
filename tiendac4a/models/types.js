const mongoose = require('mongoose');

const TypesScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true, //TODO createAt and updateAt
        versionKey: false
    }
);

module.exports = mongoose.model('Types', TypesScheme);