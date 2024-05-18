const jsonwebtoken = require("jsonwebtoken");

const options = {
    expiresIn: '366d'
};

const tokenSign = (data) => jsonwebtoken.sign(data, process.env.SECRET_KEY, options);

const tokenVerify = (token) => {
    try {
        return jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        throw new Error('Token verification failed / Invalid token');
    }
}

module.exports = {
    tokenSign,
    tokenVerify
}