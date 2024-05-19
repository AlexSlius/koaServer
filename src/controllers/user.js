const { answerSuccessfully, errorThrowClient, errorThrowServer } = require("../utils/answer.js");
const { validateCreateUser } = require("../validation/user.js");
const { getUsers, getOneById, createUser, deleteUserById } = require("../services/user.js");
const { hasPassword } = require("../utils/hash-password.js");

class User {
    async getUsers(ctx) {
        let data = await getUsers();
        answerSuccessfully({ ctx, data: data });
    }

    async getOneById(ctx) {
        let data = await getOneById(ctx.params.id);
        answerSuccessfully({ ctx, data: data });
    }

    async createUser(ctx) {
        const { errorMessage, value } = validateCreateUser({ data: ctx.request.body });

        if (errorMessage) {
            return errorThrowClient({ ctx, errorMessage });
        }

        try {
            const { password, ...other } = value;

            const data = await createUser({
                password: await hasPassword(password),
                ...other
            });

            answerSuccessfully({
                ctx, data: {
                    id: data.id
                }
            })
        } catch (error) {
            errorThrowServer({ ctx, error });
        }
    }

    async deleteUser(ctx) {
        let data = await deleteUserById(ctx.params.id);
        answerSuccessfully({ ctx, data: !!data });
    }
}

module.exports = new User();