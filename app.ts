import Koa, { Next, ParameterizedContext } from 'koa';
const app = new Koa();
import json from 'koa-json';
// import onerror from 'koa-onerror';  // 缺少 @types 包
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import koajwt from 'koa-jwt';

import { customizeResponseBody } from './middlewares/response';
import { verifyAuthorization } from './middlewares/authorization';
import jwtconf from './config/jwt';
import index from './routes/index';
import users from './routes/users';

// error handler
// onerror(app);

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(customizeResponseBody());

// logger
app.use(async (ctx: ParameterizedContext, next: Next) => {
    const start: any = new Date();
    await next();
    const current: any = new Date();
    const ms = current - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 这个错误处理必须放在 koajwt 前面，否则 koajwt 无效
app.use(verifyAuthorization());
app.use(
    koajwt({ secret: jwtconf.secret })
    .unless({
        path: [/\/users\/login/]
    })
);

// routes
app.use(index.routes()).use(index.allowedMethods());
app.use(users.routes()).use(users.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

module.exports = app;
