import Router from 'koa-router';

import usersRouters from "./users.js";
import productsRouters from "./products.js";
import { ROUTINGS } from '../constants/routers.js';

const router = new Router();

router.use(ROUTINGS.users, usersRouters.routes());
router.use(ROUTINGS.products, productsRouters.routes());

export default router;