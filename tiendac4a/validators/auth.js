const { check, validationResult } = require('express-validator');

const validatorRegister = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email debe ser un email válido').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('password', 'El password debe tener al menos una mayuscula').matches(/(?=.*[A-Z])/),
    check('password', 'El password debe tener al menos una minuscula').matches(/(?=.*[a-z])/),
    check('password', 'El password debe tener al menos un numero').matches(/(?=.*[0-9])/),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({ errors: errors.array() });
        }
        next();
    }
];

const validatorLogin = [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email debe ser un email válido').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('password', 'El password debe tener al menos una mayuscula').matches(/(?=.*[A-Z])/),
    check('password', 'El password debe tener al menos una minuscula').matches(/(?=.*[a-z])/),
    check('password', 'El password debe tener al menos un numero').matches(/(?=.*[0-9])/),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(403).json({ errors: errors.array() });
        }
        next();
    }
];



module.exports = {
    validatorRegister, validatorLogin
};
