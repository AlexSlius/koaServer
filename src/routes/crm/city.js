const Router = require('koa-router');

const router = new Router();

usersRouter.get('/', userControler.getUsers);
usersRouter.post('/', userControler.createUser);
usersRouter.delete('/:id', userControler.deleteUser);

module.exports = router;