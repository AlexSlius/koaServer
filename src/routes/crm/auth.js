const Router = require('koa-router');

const { middleWareAuntificate } = require('../../middleware/auth.js');

const authRouter = new Router();

authRouter.post('login', middleWareAuntificate);

module.exports = authRouter;