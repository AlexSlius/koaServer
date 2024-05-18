const { errorThrowServer } = require("../utils/answer.js");

const middleWareError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        errorThrowServer({ ctx, error })
    }
}

module.exports = {
    middleWareError
}