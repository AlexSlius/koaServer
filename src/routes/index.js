const Router  = require('koa-router');

const crmRouters  = require("./crm/index.js");

const router = new Router();

router.use('/crm', crmRouters.routes());

module.exports = router;