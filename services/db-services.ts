import { SQLiteDatabase, openDatabase, enablePromise} from "react-native-sqlite-storage";
import { ExerciseItem } from "./models";

enablePromise(true);
const tableName = "exercise";

export const getConnexionDB = async (dbName :string, locationPath  :string) => {
    return openDatabase({
        name : dbName,
        location :"default",
        createFromLocation : locationPath
    });
}

export const createTable = async (db : SQLiteDatabase, tableName : String) => {

    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

    await db.executeSql(query);
}

export const getExerciseItem = async (db : SQLiteDatabase, tableName : String) : Promise<ExerciseItem[]> => {
    try {
        const exerciseItem : ExerciseItem[] = [];
        const results = await db.executeSql(`SELECT rowid as id,title FROM ${tableName}`);
        console.log("res ",results)
        results.forEach(result => {
            for (let i = 0; i = result.rows.length; i++){
                exerciseItem.push(result.rows.item(i))
            }
        });
        return exerciseItem;
    } catch (error) {
        //console.error(error);
        throw Error('Failed to get ExerciseItem');
    }
}

export const saveExerciseItem = async (db : SQLiteDatabase, exerciseItems : ExerciseItem[]) => {
    const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, title, desc) values` +
    exerciseItems.map(i => `(${i.id}, '${i.title}', '${i.desc}', '${i.sport}', '${i.level}')`).join(',');

    return db.executeSql(insertQuery);
}

export const deleteExerciseItem = async (db : SQLiteDatabase, id : number) => {
    const deleteQuery =
    `DELETE from ${tableName} where rowid = ${id}`;
    await db.executeSql(deleteQuery);
}

export const deleteTable = async(db : SQLiteDatabase) => {
    const deleteTable = 
    `DROP ${tableName}`; 
    await db.executeSql(deleteTable);
}