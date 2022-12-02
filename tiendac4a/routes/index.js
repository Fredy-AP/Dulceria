const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).forEach(file => {
    if (file !== 'index.js') {
        const route = require(`./${file}`);
        router.use(`/${file.replace('.js', '')}`, route);
    }
});

module.exports = router;