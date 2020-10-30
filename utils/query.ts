/**
 * SQL 语句执行入口
 */

import * as fs from 'fs';
import * as path from 'path';
import mysql, { MysqlError, PoolConnection } from 'mysql';

const result: string = fs.readFileSync(path.join(__dirname, '../config.json'), { encoding: 'utf-8' });
const { mysql: MYSQL_CONFIG } = JSON.parse(result);
const pool = mysql.createPool(MYSQL_CONFIG);

if (!!pool.getConnection) {
    console.log('Database has been connected.')
}

export const query = (sql: string, val: string | undefined = undefined): Promise<any> => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error: MysqlError, connection: PoolConnection) => {
            if (error) reject(error);

            connection.query(sql, val, (error: MysqlError | null, results: any) => {
                if (error) reject(error);
                
                resolve(results);
                connection.release();
            });
        });
    });
}
