const Koa = require("koa");
const dotenv = require("dotenv");
const Router = require('koa-router');
const cors = require("@koa/cors");
const json = require("koa-json");
const { join } = require("path");
const koaStatic = require("koa-static");
const bodyParser = require('koa-bodyparser');

const routersAll = require("./routes/index.js");
const { middleWareError } = require("./middleware/error.js");


dotenv.config();

const app = new Koa();
const router = new Router();

const staticDir = join(__dirname, '../storage');

app.use(cors());
app.use(json());
app.use(koaStatic(staticDir));
app.use(bodyParser());
app.use(middleWareError);

router.use('/api', routersAll.routes());

// Adding routes to the application
app.use(router.routes());
app.use(router.allowedMethods());


module.exports = app;