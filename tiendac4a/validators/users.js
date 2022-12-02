const { check, validationResult } = require('express-validator');

const validatorGetUser = [
    check('id', 'El id es obligatorio').not().isEmpty(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({ errors: errors.array() });
        }
        next();
    }
];

const validatorUpdateRole = [
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('role', 'El rol es obligatorio').not().isEmpty(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validatorGetUser,
    validatorUpdateRole
};


