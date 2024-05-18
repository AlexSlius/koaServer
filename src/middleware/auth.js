const { answerSuccessfully, errorThrowClient } = require("../utils/answer.js");
const { compareHasPassword } = require("../utils/hash-password.js");
const { tokenSign } = require("../utils/jwt.js");
const { getUserByLogin } = require("../services/user");
const { validateAuthLogin } = require("../validation/user.js");

const middleWareAuntificate = async (ctx, next) => {
    const { errorMessage, value } = validateAuthLogin({ data: ctx.request.body });

    if (errorMessage) {
        return errorThrowClient({ ctx, status: 400, errorMessage: errorMessage });
    }

    const user = await getUserByLogin(value.login);

    if (!user || !(await compareHasPassword({ password: value.password, hashDb: user.password }))) {
        return errorThrowClient({ ctx, status: 401, errorMessage: 'Invalid username or password' });
    }

    const token = tokenSign({ id: user.id, role: user.roleId, city: user.cityId });

    answerSuccessfully({
        ctx, data: {
            token,
            user: {
                name: user.name
            }
        }
    });
}

module.exports = {
    middleWareAuntificate
}