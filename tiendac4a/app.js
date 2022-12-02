require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbConect = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));// vuelvo publica la carpeta storage
const port = process.env.PORT || 3000;
/**
 * Rutas
 */
app.use('/api', require('./routes'));
app.listen(port, () => {
    console.log(`Tu ejemplo se ejecuta en el puerto http://localhost:${port}`)
});

dbConect();
