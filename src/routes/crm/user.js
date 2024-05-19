const Router = require('koa-router');

const userControler = require("../../controllers/user.js");

const usersRouter = new Router();

usersRouter.get('/', userControler.getUsers);
usersRouter.get('/:id', userControler.getOneById);
usersRouter.post('/', userControler.createUser);
usersRouter.delete('/:id', userControler.deleteUser);

module.exports = usersRouter;
