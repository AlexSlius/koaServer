import Router from 'koa-router';

import userControler from "../controllers/user.js";

const usersRouter = new Router();

usersRouter.get('/', userControler.getUsers);
usersRouter.get('/:id', async (ctx) => {
    ctx.body = `Інформація про користувача з ID ${ctx.params.id}`;
});
usersRouter.post('/', userControler.createUser);

export default usersRouter;
