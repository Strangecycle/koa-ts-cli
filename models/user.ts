import { query } from '../utils/query';
import { SELECT_ALL, SELECT_ONE } from '../sql/student';

const TABLE_NAME = 'STUDENT';

const findAll = async (): Promise<any> => await query(SELECT_ALL(TABLE_NAME));

const findOneById = async (id: number): Promise<any> => await query(SELECT_ONE(TABLE_NAME, id));

export const UserModel = {
    findAll,
    findOneById
};
