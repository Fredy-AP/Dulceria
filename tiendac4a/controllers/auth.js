const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
//const { tokenSign } = require('../utils/handleJwt');
const { UsersModels } = require('../models/');
const { handleHttpError } = require('../utils/handleError');
/**
 * controlador encargado de registrar
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const passwordHash = await encrypt(req.password);
        const body = { ...req, password: passwordHash };
        const dataUser = await UsersModels.create(body);
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "Error al registrar", 500);
    }
}

/**
 * controlador encargado de iniciar sesión
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await UsersModels.findOne({ email: req.email }).select('+password');
        if (!user) {
            return handleHttpError(res, "Usuario no encontrado", 404);
        }
        const hashPassword = user.get("password");
        const check = await compare(req.password, hashPassword);
        if (!check) {
            return handleHttpError(res, "Contraseña incorrecta", 401);
        }

        user.set("password", undefined, { strict: false });

        // const data = {
        //     token: await tokenSign(user),
        //     user
        // }
        // res.send({ data });

    } catch (error) {
        handleHttpError(res, "Error al iniciar sesión", 500);
        console.log(error);
    }

}



module.exports = { registerCtrl, loginCtrl }