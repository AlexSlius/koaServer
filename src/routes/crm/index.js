const Router = require('koa-router');

const authRouter = require("./auth.js");
const usersRouters = require("./user.js");
const rolesRouters = require("./role.js");
const citysRouters = require('./city.js');
const gameRouters = require('./game.js');
const { middlewareVerifyToken } = require('../../middleware/verify.js');

const router = new Router();

router.use('/', authRouter.routes());
router.use('/users', middlewareVerifyToken, usersRouters.routes());
router.use('/roles', middlewareVerifyToken, rolesRouters.routes());
router.use('/cities', middlewareVerifyToken, citysRouters.routes());
router.use('/games', middlewareVerifyToken, gameRouters.routes());

module.exports = router;