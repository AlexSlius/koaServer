const Joi = require("joi");

const schemaCity = Joi.object({
    name: Joi.string().required()
});

module.exports = {
    schemaCity
}