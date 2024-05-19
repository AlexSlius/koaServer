const { errorThrowClient } = require("../utils/answer.js");
const { tokenVerify } = require("../utils/jwt.js");

const middlewareVerifyToken = (ctx, next) => {
    const token = ctx.request.headers.authorization?.split(' ')[1];

    if (!token) {
        return errorThrowClient({ ctx, status: 401, errorMessage: 'Authorization token is missing' });
    }

    const decoded = tokenVerify(token);

    ctx.state.user = decoded;
    return next();
}

module.exports = {
    middlewareVerifyToken
}