const Router = require('koa-router');

const userControler = require("../../controllers/user.js");

const usersRouter = new Router();

usersRouter.get('/', userControler.getUsers);
usersRouter.get('/:id', async (ctx) => {
    ctx.body = `Інформація про користувача з ID ${ctx.params.id}`;
});
usersRouter.post('/', userControler.createUser);

module.exports = usersRouter;
