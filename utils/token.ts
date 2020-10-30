import { sign } from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

export const getToken = async (info: any) => {
    return await sign(info, jwtConfig.secret, { expiresIn: '1h' });
}
