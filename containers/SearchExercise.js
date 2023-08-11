import { StyleSheet, Image, ScrollView, Text, FlatList, TouchableOpacity, TextInput,  View  } from 'react-native'
import React , {useState, useEffect, useCallback} from 'react';
import { getConnexionDB, createTable, getExerciseItem, saveExerciseItem } from "../services/db-services.ts"
import RoutineCard from "../components/RoutineCard";
import SearchBar from '../components/SearchBar';
import mma_basic from "../images/mma_basic.webp";
import striking from "../images/striking.jpg";
import cardio_mma from "../images/cardio_mma.jpg";
import boxing from "../images/boxing.jpg";

const data = [
    {
        "title" :"MMA basic",
        "level" : 1,
        "sport":"MMA",
        "id":1,
        "image" : mma_basic
    },
    {
        "title" :"MMA defensive",
        "level" : 1,
        "sport":"MMA",
        "id":2,
        "image" : mma_basic
    },
    {
        "title" :"striking 101",
        "level" : 1,
        "sport":"MMA",
        "id":4,
        "image" :striking
    },
    {
        "title" :"Boxe 101",
        "level" : 1,
        "sport":"BOXE",
        "id":8,
        "image" :boxing
    },
    {
        "title" :"Cardio Basix",
        "level" : 1,
        "sport":"FITNESS",
        "id":21,
        "image" :cardio_mma
    }
]


function SearchExercise  ({ route, navigation }) {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([])
    const [search, setSearch] = useState(route.params.search)
    useEffect(  async ()=>{
        
        if(search !== ''){
            //console.log(db)
            
            const getStoredData = async (data) => {

                const db = await getConnexionDB();
                await createTable(db , "exercise");
                console.log(db);
                
                /*
                try {
                    let stored = await getExerciseItem(db, "exercise");
                
                    if ( stored.length){
                        console.log("data " ,stored);
                    }
                    else {
                        await saveExerciseItem(db, data);
                        
                    }
                    return stored;
                }
                catch (error) {
                     console.error(error);
                     
                }*/
                let filtered = data.filter(el => el.sport === search.toUpperCase());
                return filtered;
            
            }

            const new_data = await getStoredData(data)
            setResult(new_data);

       

            
        }
        else {
            setResult(data);
        }
    },[search])
    return (
        <ScrollView>
            <SearchBar/>
            {result.map( (item, k)=> (
                <RoutineCard
                    key={k}
                    data={item} 
                    navigation={navigation}
                    location="ExerciseDetail"
            />
            ))}
            
        </ScrollView>
    )
}


export default SearchExercise