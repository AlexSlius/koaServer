const Joi = require("joi");

const schemaCreateUser = Joi.object({
    name: Joi.string().required(),
    login: Joi.string().required(),
    roleId: Joi.number().required(),
    cityId: Joi.number().required(),
    password: Joi.string().required()
})

module.exports = {
    schemaCreateUser
};