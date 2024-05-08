import Joi from "joi";

export const schemaCreateUser = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required()
})
