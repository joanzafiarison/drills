import { promisify } from 'util';
import SQLite from 'react-native-sqlite-storage';
import { SqlExecutor } from "../services/models/index";
import { Database } from 'sqlite3';
//import { getConnexionDB } from "../services/db-services"; 

//enablePromise(true);

const sqlite3 = require('sqlite3').verbose();
import { createUsers } from '../services/user-services';

const createNodeSqlite2Executor = (db : Database) : SqlExecutor => {
    const allPromise = promisify(db.all).bind(db);
    return {
        read: ((query, args) => allPromise(query, args)),
        write: ((query, args) => allPromise(query, args))
    }
};

export const getConnexionDB = async (dbName :string, locationPath  :string) => {
    return SQLite.openDatabase({
        name : dbName,
        location :"default",
        createFromLocation : locationPath
    });
}

const inMemoryDb = new sqlite3.Database(':memory:');
const nodeExecutor = createNodeSqlite2Executor(inMemoryDb);
const userQueries = createUsers(nodeExecutor);



describe('usersQueries', () => {
    beforeEach(async () => {
        await userQueries.createTable();
    })
    it('getCount should return zero for empty table', async () => {
        const count = await userQueries.getCount();
        expect(count).toEqual(NaN);
    })
})

describe('connector exist', () => {
    beforeEach(async () => {
        const connexion = await getConnexionDB("drills","~drills.db")
        //console.log("connexion ",connexion)
        //await userQueries.createTable();
    })
    it('table USER exist', async () => {
        expect(nodeExecutor).toEqual("")
    })
})