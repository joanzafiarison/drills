import { SQLiteDatabase, openDatabase, enablePromise} from "react-native-sqlite-storage";

enablePromise(true);


export const getConnexionDB = async (dbName :string, locationPath  :string) => {
    return openDatabase({
        name : dbName,
        location :"default",
        //createFromLocation : locationPath
    });
}


export const deleteTable = async(db : SQLiteDatabase, tableName : String) => {
    const deleteTable = 
    `DROP TABLE IF EXISTS ${tableName};`; 
    try {
      await db.executeSql(deleteTable);
    }
    catch(err){
      console.error("fail to delete",err)
    }
    
}


//Option 2

export const ExecuteQuery = (sql, params = [], db :SQLiteDatabase) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        resolve(results);
      },
        (error) => {
          reject(error);
        });
    });
  });