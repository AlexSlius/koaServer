const { answerSuccessfully, errorThrowClient, errorThrowServer } = require("../utils/answer.js");
const { validateCreateUser } = require("../validation/user.js");

const { models } = require('../db/models')

class User {
    async getUsers(ctx) {
        let dataUser = await models.user.findOne({
            where: {
                id: 9
            },
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                {
                    model: models.role,
                    attributes: ['name']
                },
                {
                    model: models.city,
                    attributes: ['name']
                }
            ]
        });

        ctx.status = 200;
        ctx.body = {
            dataUser,
        };
    }

    async createUser(ctx) {
        const { errorMessage, value } = validateCreateUser({ data: ctx.request.body });

        if (errorMessage) {
            return errorThrowClient({ ctx, errorMessage });
        }

        try {
            const { name, lastName, age } = value;
            answerSuccessfully({ ctx, data: { name, lastName, age } })
        } catch (error) {
            errorThrowServer({ ctx, error });
        }
    }
}

module.exports = new User();