const { check, validationResult } = require('express-validator');

const validatorCreateItem = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('code', 'El codigo es obligatorio').not().isEmpty(),
    check('price', 'El precio es obligatorio').not().isEmpty(),
    check('price', 'El precio debe ser un número').isNumeric(),
    check('iva', 'El iva debe ser un número').isNumeric(),
    check('description', 'La descripción es obligatoria').not().isEmpty(),
    check('image', 'La imagen es obligatoria').not().isEmpty(),
    check('calification', 'La calificación debe ser un número').isNumeric(),


    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({ errors: errors.array() });
        }
        next();
    }

];

const validatorGetItem = [
    check('id', 'El id es obligatorio').not().isEmpty(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({ errors: errors.array() });
        }
        next();
    }

];


module.exports = {
    validatorCreateItem,
    validatorGetItem
};
