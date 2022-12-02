const express = require('express');
const { getUsers, getUser, UpdateRole, deleteUser } = require('../controllers/users');
const { validatorGetUser, validatorUpdateRole } = require('../validators/users');
const router = express.Router();

/**
 * Listado de usuarios
 * */
router.get('/users', getUsers);

/**
 * Obtener un usuario
 * */
router.get('/users/:id', validatorGetUser, getUser);

/**
 * Actualizar el rol de un usuario
 * */
router.put('/users/:id', validatorUpdateRole, validatorGetUser, UpdateRole);

/**
 * Eliminar un usuario
 * */
router.delete('/users/:id', validatorGetUser, deleteUser);

module.exports = router;
