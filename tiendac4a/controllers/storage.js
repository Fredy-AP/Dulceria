const { ProductsModels } = require('../models');
/**
 * Obtener todos los productos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await ProductsModels.find({});
    res.send({ data });
};


/**
 * Obtener un producto
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    const { id } = req.params;
    const data = await ProductsModels.findById(id);
    res.send({ data });
};


/**
 * Crear un producto
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await ProductsModels.create(body);
    res.send({ data });
};



/**
 * Actualizar un producto
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const data = await ProductsModels.findByIdAndUpdate(id, body, { new: true });
    res.send({ data });
};

/**
 * Eliminar un producto
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    const { id } = req.params;
    const data = await ProductsModels.findByIdAndDelete(id);
    res.send({ data });
};




module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
};
