import Router from 'koa-router';
import { Next, ParameterizedContext } from 'koa';
import { UserModel } from '../models/user';
import { getToken } from '../utils/token';

const router: Router<any, {}> = new Router();

router.prefix('/users');

router.get('/', async (ctx: ParameterizedContext, next: Next) => {
    let data = await UserModel.findAll();
    
    ctx.body = ctx.formatResponseBody(0, data);
});

router.get('/login', async (ctx: ParameterizedContext, next: Next) => {
    const token = await getToken({ id: 'token' });

    ctx.body = ctx.formatResponseBody(0, token);
});

router.get('/student', async (ctx: ParameterizedContext, next: Next) => {
    const { id } = ctx.request.query;
    let data = await UserModel.findOneById(id);

    ctx.body = ctx.formatResponseBody(0, data[0]);
});

export default router;
