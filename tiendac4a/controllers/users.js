const { matchedData } = require('express-validator');
const { UsersModels } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getUsers = async (req, res) => {
    try {
        const data = await UsersModels.find({});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al obtener los usuarios", 500);
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await UsersModels.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al obtener el usuario", 500);
    }
};

const UpdateRole = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const body = matchedData(req);
        const data = await UsersModels.findByIdAndUpdate(id, body, { new: true });
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al actualizar el usuario", 500);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await UsersModels.findByIdAndDelete(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al eliminar el usuario", 500);
    }
};

module.exports = { getUsers, getUser, UpdateRole, deleteUser };