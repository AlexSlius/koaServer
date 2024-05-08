import { validateCreateUser } from "../validation/user.js";

class User {
    async getUsers(ctx) {
        console.log("ctx: ", ctx);
        ctx.body = 'Список користувачів';
    }
    async createUser(ctx) {
        const { errorMessage, value } = validateCreateUser(ctx.request.body);

        if (errorMessage) {
            ctx.status = 400;
            ctx.body = {
                error: true,
                errorMessage
            };
            return;
        }

        const { name, lastName, age } = value;

        console.log(name, lastName, age);

        ctx.status = 200;
        ctx.body = { message: 'Data validated and processed successfully' };
    }
}

export default new User();