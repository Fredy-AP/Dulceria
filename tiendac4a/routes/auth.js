const express = require('express');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { registerCtrl, loginCtrl } = require('../controllers/auth');
const router = express.Router();
/**
 * Crear un registro de usuario
 */
router.post('/register', validatorRegister, registerCtrl);

/**
 * Iniciar sesión
 * */
router.post('/login', validatorLogin, loginCtrl);

module.exports = router;