// routes/products.js
import Router from 'koa-router';

const productsRouter = new Router();

// Маршрут для списку продуктів
productsRouter.get('/', async (ctx) => {
    ctx.body = 'Список продуктів';
});

// Маршрут для отримання інформації про продукт за ID
productsRouter.get('/:id', async (ctx) => {
    console.log('ctx: ', ctx);
    ctx.body = `Інформація про продукт з ID ${ctx.params.id}`;
});

export default productsRouter;
