import { SqlExecutor, UserData } from "./models";
import { ExecuteQuery } from "./db-services"
import { SQLiteDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

const tableName="users";

const CREATE_TABLE_IF_NOT_EXIST = `CREATE TABLE IF NOT EXISTS USERS (NAME TEXT, PASSWORD TEXT);`;

const CREATE_USER = `INSERT INTO USERS `;

const GET_COUNT = `SELECT count(*) AS result FROM USERS`;

export const createUsers = (executor: SqlExecutor) => ({
    createTable: () => executor.write(CREATE_TABLE_IF_NOT_EXIST),

    getCount: () => executor.read(GET_COUNT).then(result => Number.parseInt(result[0]))
})

export const getUserItem = async ( db : SQLiteDatabase) : Promise<UserData[]> => {
    try {
        const userItems : UserData[] = [];
        const results = await db.executeSql(`SELECT * FROM ${tableName}`);
        console.log("res user", results)
        results.forEach( result => {
            for(let i = 0 ; i < result.rows.length; i++){
                console.log("user", result.rows.item(i))
                userItems.push(result.rows.item(i))
            }
         }
        )
         console.log("final ",userItems)
        return userItems;
    }
    catch (error) {
        throw new Error(JSON.stringify(error))
    }
}

export const saveUserItem = async( db : SQLiteDatabase, userItems : UserData[]) => {
  console.log("user to add", userItems) 
  const insertQuery = 
    `INSERT INTO ${tableName} (username, email) values `+
    userItems.map((item) => `('${item.email}', '${item.username}')`).join(',')
    try {
      await db.executeSql(insertQuery);
      console.log("successfully add",insertQuery)
    }
    catch (error){
      throw new Error(JSON.stringify(error))
    }
    
}

export const createTable = async( db : SQLiteDatabase, tableName : String ) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
      username TEXT NOT NULL,
      email TEXT NOT NULL
  )`;

  try {
    const sqlCommand = await db.executeSql(query);
    console.log("user table created")
    return sqlCommand;

  }
  catch (err) {
    throw new Error(JSON.stringify(err))
  }

}

//Option 2
async function CreateTableLeg(db : SQLiteDatabase) {
  
    let userTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, first_name VARCHAR(16), last_name VARCHAR(16), is_deleted INTEGER)", [],db);
    console.log(userTable);
  }

  async function getCount(db : SQLiteDatabase) {
    let userCount = await ExecuteQuery("SELECT count(*) AS result FROM USERS",[],db);
    console.log("count", userCount)
  }

  async function InsertUser(db : SQLiteDatabase) {
    let singleInsert = await ExecuteQuery("INSERT INTO users (id, first_name, last_name, is_deleted) VALUES ( ?, ?, ?, ?)", [1, 'Infinite', 'Ability', 0],db);
    alert(JSON.stringify(singleInsert));
  }

  async function GetUser(db : SQLiteDatabase) {
    let users = await ExecuteQuery("SELECT * FROM users",[],db);
    console.log("get",users)
  }