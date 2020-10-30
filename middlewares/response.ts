import { ResponseCode } from '../enums/response';

export const customizeResponseBody = () => {
    return async (ctx: any, next: any) => {
        ctx.formatResponseBody = (status: any, data: any | any[] = {}, extra: any = {}) => {
            const message: any = ResponseCode[status];
            const code: any = ResponseCode[message];
            const path: string = ctx.path;
            const timeSamp: number = new Date().getTime();

            return {
                code,
                data,
                message,
                path,
                extra,
                timeSamp
            };
        }
        await next();
    }
}
