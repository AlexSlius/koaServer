const Router = require('koa-router');

const authRouter = require("./auth.js");
const usersRouters = require("./user.js");
const { middlewareVerifyToken } = require('../../middleware/verify.js');


const router = new Router();

router.use('/', authRouter.routes());
router.use('/users', usersRouters.routes()); //middlewareVerifyToken, 

module.exports = router;