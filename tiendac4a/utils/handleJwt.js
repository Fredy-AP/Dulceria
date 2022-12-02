const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * 
 * @param {pasar el objeto de usuario} user 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '1d'
        }

    )
    return sign;
};
/**
 * 
 * @param {pasar el token de sesion} tokenJwt 
 * @returns 
 */

const tokenVerify = async (tokenJwt) => {
    try {
        const decoded = jwt.verify(tokenJwt, JWT_SECRET);
        return decoded;
    } catch (error) {
        return false;
    }
};

module.exports = { tokenSign, tokenVerify };