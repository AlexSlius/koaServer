import { answerSuccessfully, errorThrowClient } from "../utils/answer.js";
import { compareHasPassword } from "../utils/hash-password.js";
import { tokenSign } from "../utils/jwt.js";

const userData = {
    id: 1,
    name: 'Alex',
    email: 'test@gmail.com',
    password: "$2a$10$6M6pOBeXrEORzyjI58goFOTPq1wTn1SddcgbMXSsg90hvsr7u75b6"
}

export const middleWareAuntificate = async (ctx, next) => {
    const { email, password } = ctx.request.body;

    // зробити пошук користувача в базі
    const user = userData;

    if (!user || !(await compareHasPassword({ password, hashDb: user.password }))) {
        return errorThrowClient({ ctx, status: 401, errorMessage: 'Invalid username or password' });
    }

    const token = tokenSign({ id: user.id });
    ctx.response.set('Authorization', `Bearer ${token}`);
    answerSuccessfully({ ctx, data: { token, user } });
}