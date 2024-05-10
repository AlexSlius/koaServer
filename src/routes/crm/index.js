import Router from 'koa-router';

import authRouter from "./auth.js";
import usersRouters from "./user.js";
import { middlewareVerifyToken } from '../../middleware/verify.js';


const router = new Router();

router.use('/', authRouter.routes());
router.use('/users', middlewareVerifyToken, usersRouters.routes());

export default router;