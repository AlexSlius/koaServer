const Joi = require("joi");

const schemaLogin = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required(),
})

module.exports = {
    schemaLogin
};