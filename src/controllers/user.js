import { answerSuccessfully, errorThrowClient, errorThrowServer } from "../utils/answer.js";
import { validateCreateUser } from "../validation/user.js";

class User {
    async getUsers(ctx) {
        console.log("ctx: ", ctx);
        ctx.body = 'Список користувачів';
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

export default new User();