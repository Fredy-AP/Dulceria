const mongoose = require('mongoose');

const dbConect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err, res) => {
            if (!err) {
                console.log('Base de datos conectada');
            } else {
                console.log('Error al conectar la base de datos');
            }
        });
}

module.exports = dbConect;