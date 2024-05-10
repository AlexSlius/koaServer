import Router from 'koa-router';

import { middleWareAuntificate } from '../../middleware/auth.js';

const authRouter = new Router();

authRouter.post('login', middleWareAuntificate);

export default authRouter;