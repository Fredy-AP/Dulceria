const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/products');
const { validatorCreateItem, validatorGetItem } = require('../validators/products');
const router = express.Router();

/**
 * Listado de productos
 */
router.get('/', getItems);

/**
 * Crear un producto
 */
router.post('/', validatorCreateItem, createItem);

/**
 * Obtener un producto
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Actualizar un producto
 */
router.put('/:id', validatorCreateItem, validatorGetItem, updateItem);

/**
 * Eliminar un producto
 */
router.delete('/:id', validatorGetItem, deleteItem);



module.exports = router;

