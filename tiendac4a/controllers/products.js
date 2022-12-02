const { matchedData } = require('express-validator');
const { ProductsModels } = require('../models');
const { handleHttpError } = require('../utils/handleError');
/**
 * Obtener todos los productos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await ProductsModels.find({});
        res.send({ data });

    } catch (error) {
        handleHttpError(res, "Error al obtener los productos", 500);
    }

};


/**
 * Obtener un producto
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await ProductsModels.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al obtener el producto", 500);
    }
};


/**
 * Crear un producto
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await ProductsModels.create(body);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al crear el producto", 500);
    }
};



/**
 * Actualizar un producto
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const body = matchedData(req);
        const data = await ProductsModels.findByIdAndUpdate(id, body, { new: true });
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al actualizar el producto", 500);
    }
};

/**
 * Eliminar un producto
 * plugin mongose-delete esta en el modelo para que no se elimine de la base de datos...
 * por ahora estamos eliminando el producto de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ProductsModels.findByIdAndDelete(id);
        res.send({ data });

    } catch (error) {
        handleHttpError(res, "Error al eliminar el producto", 500);
    }
};




module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
};
