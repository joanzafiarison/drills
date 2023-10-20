import {SqlExecutor} from "./models"

const CREATE_TABLE_IF_NOT_EXIST = `CREATE TABLE IF NOT EXISTS USERS (NAME TEXT, PASSWORD TEXT);`

const CREATE_USER = `INSERT INTO USERS `;

const GET_COUNT = `SELECT count(*) AS result FROM USERS`

export const createUsers = (executor: SqlExecutor) => ({
    createTable: () => executor.write(CREATE_TABLE_IF_NOT_EXIST),

    getCount: () => executor.read(GET_COUNT).then(result => Number.parseInt(result[0]))
})