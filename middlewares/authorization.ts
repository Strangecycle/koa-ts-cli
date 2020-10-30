import { Next, ParameterizedContext } from 'koa';

export const verifyAuthorization = () => {
    return (ctx: ParameterizedContext, next: Next) => {
        return next().catch((error: any) => {
            if (error.status !== 401) {
                throw error;
            } 
            const path: string = ctx.path;
            const timeSamp: number = new Date().getTime();

            ctx.status = 401;
            ctx.body = {
                code: ctx.status,
                data: {},
                message: 'unauthorized',
                path,
                extra: {},
                timeSamp
            };
        });
    }
}
