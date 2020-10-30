import Router from 'koa-router';
import { Next, ParameterizedContext } from 'koa';

const router: Router<any, {}> = new Router(); 

router.get('/', async (ctx: ParameterizedContext, next: Next) => {
    ctx.body = 'Hello'
});

router.get('/string', async (ctx: ParameterizedContext, next: Next) => {
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx: ParameterizedContext, next: Next) => {
    ctx.body = {
        code: 0,
        msg: 'success'
    };
});

export default router;
