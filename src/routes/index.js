import Router from 'koa-router';

import crmRouters from "./crm/index.js";

const router = new Router();

router.use('/crm', crmRouters.routes());

export default router;