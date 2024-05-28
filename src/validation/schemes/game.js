const Joi = require("joi");

const schemaCreateGame = Joi.object({
    name: Joi.string().required(),
    cityId: Joi.string().required(),
    userId: Joi.string().required(),
    image: Joi.string().valid('image/jpeg', 'image/png', 'image/gif').required(),
    description: Joi.string().required(),
});

const schemaUpdateGame = Joi.object({
    image: Joi.string().valid('image/jpeg', 'image/png', 'image/gif'),
    description: Joi.string(),
});

module.exports = {
    schemaCreateGame,
    schemaUpdateGame
}