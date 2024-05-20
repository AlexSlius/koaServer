const Joi = require("joi");

const schemaRole = Joi.object({
    name: Joi.string().required()
});

module.exports = {
    schemaRole
}