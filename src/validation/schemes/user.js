const Joi = require("joi");

const schemaCreateUser = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required()
})

module.exports = schemaCreateUser;