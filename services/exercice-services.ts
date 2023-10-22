import { ExerciseItem } from "./models";
import { SQLiteDatabase, openDatabase, enablePromise} from "react-native-sqlite-storage";

enablePromise(true);

const tableName = "exercises";
/**/ 
export const createTable = async (db : SQLiteDatabase, tableName : String) => {

    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
        title TEXT NOT NULL,
        desc TEXT NOT NULL,
        level TEXT NOT NULL,
        sport TEXT NOT NULL,
        image TEXT 
    );`;
   //id INTEGER PRIMARY KEY NOT NULL, user_id INTEGER, country_name VARCHAR(16), is_deleted INTEGER
    try {
      const sqlCommand = await db.executeSql(query);
      console.log("table created ",sqlCommand)
    }
    catch(error){
      throw new Error(JSON.stringify(error))
    }
    
}

export const getExerciseItem = async (db : SQLiteDatabase, tableName : String) : Promise<ExerciseItem[]> => {
    try {
        const exerciseItem : ExerciseItem[] = [];
        const results = await db.executeSql(`SELECT rowid as id, title, level, sport, desc FROM ${tableName}`); ////
        results.forEach(result => {
            for (let i = 0; i < result.rows.length; i++){
                exerciseItem.push(result.rows.item(i))
            }
        });
        return exerciseItem;
    } catch (error) {
        //console.error(error);
        throw new Error(JSON.stringify(error));
    }
}

export const getExerciseItemBySportType = async ( db : SQLiteDatabase, sport : String) =>{
    try {
        const exerciseItems : ExerciseItem[] = [];
        const results = await db.executeSql(`SELECT rowid as id, title, desc, level, sport, image FROM exercises where sport like '%${sport.toUpperCase()}'`);
        results.forEach(result => {
            for(let i = 0; i< result.rows.length; i++){
                exerciseItems.push(result.rows.item(i))
            }
        })
        console.log("for sport "+sport,exerciseItems)
        return exerciseItems;

    }
    catch (err) {
        throw new Error(err)
    }
}

export const saveExerciseItem = async (db : SQLiteDatabase, exerciseItems : ExerciseItem[]) => {
    const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, title, desc, sport, level, image) values` +
    exerciseItems.map(i => `(${i.id}, '${i.title}', '${i.desc}', '${i.sport}', '${i.level}', '${i.image}')`).join(',');
    try {
        await db.executeSql(insertQuery);
    }
    catch(err){
        throw new Error(JSON.stringify(err))
    }
} 

export const deleteExerciseItem = async (db : SQLiteDatabase, id : number) => {
    const deleteQuery =
    `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
}