import * as SecureStore  from "expo-secure-store";

export const logIn = () => {
    return true;
}


export const storedUserSession = async ( key : string , value : string ) => {
    
    try {
        await SecureStore.setItemAsync( key , value )
    } catch (err) {
        throw err;
    }
}

export const retrieveUserSession = async ( key : string ) => {
    try {
        const value = await SecureStore.getItemAsync(key);

        if (value) {
            //alert(`valeur de ${key} = ${value}`)
            return value;
        }
    } catch (error) {
        alert(JSON.stringify(error))
        throw error;
    }
}