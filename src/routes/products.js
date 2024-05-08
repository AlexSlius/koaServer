import Router from 'koa-router';

const productsRouter = new Router();

productsRouter.get('/', async (ctx) => {
    ctx.body = 'Список продуктів';
});

productsRouter.get('/:id', async (ctx) => {
    console.log('ctx: ', ctx);
    ctx.body = `Інформація про продукт з ID ${ctx.params.id}`;
});

export default productsRouter;
