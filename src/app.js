import Koa from "koa";
import Router from 'koa-router';
import cors from "@koa/cors";
import json from "koa-json";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';
import koaStatic from "koa-static";
import bodyParser from 'koa-bodyparser';

import routersAll from "./routes/index.js";

const app = new Koa();
const router = new Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const staticDir = join(__dirname, '../storage');

app.use(cors());
app.use(json());
app.use(koaStatic(staticDir));
app.use(bodyParser());

router.use('/api', routersAll.routes());

// Adding routes to the application
app.use(router.routes());
app.use(router.allowedMethods());

export default app;