// routes/users.js
import Router from 'koa-router';

const usersRouter = new Router();

// Маршрут для списку користувачів
usersRouter.get('/', async (ctx) => {
    ctx.body = 'Список користувачів';
});

// Маршрут для отримання інформації про користувача за ID
usersRouter.get('/:id', async (ctx) => {
    ctx.body = `Інформація про користувача з ID ${ctx.params.id}`;
});

export default usersRouter;
