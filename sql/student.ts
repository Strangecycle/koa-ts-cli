export const SELECT_ALL = (tableName: string): string => `SELECT * FROM ${tableName}`;

export const SELECT_ONE = (tableName: string, id: number) => `SELECT * FROM ${tableName} WHERE ID = ${id}`;
