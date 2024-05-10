import { errorThrowClient } from "../utils/answer.js";
import { tokenVerify } from "../utils/jwt.js";

export const middlewareVerifyToken = (ctx, next) => {
    const token = ctx.request.headers.authorization?.split(' ')[1];

    if (!token) {
        return errorThrowClient({ ctx, status: 401, errorMessage: 'Authorization token is missing' });
    }

    const decoded = tokenVerify(token);
    ctx.state.user = decoded;
    return next();
}