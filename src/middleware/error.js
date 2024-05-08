import { errorThrowServer } from "../utils/answer.js";

export const middleWareError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        errorThrowServer({ ctx, error })
    }
}