const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: ["user", "admin"],
            default: "user"
        },
    },
    {
        timestamps: true, //TODO createAt and updateAt
        versionKey: false

    }
);

module.exports = mongoose.model('Users', UserScheme);
