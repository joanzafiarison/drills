import { StyleSheet, Image, ScrollView, Text, FlatList, TouchableOpacity, TextInput,  View  } from 'react-native'
import React , {useState, useEffect, useCallback} from 'react';
import { getConnexionDB , deleteTable} from "../services/db-services.ts";
import { getExerciseItem, getExerciseItemBySportType,  saveExerciseItem, createTable } from "../services/exercice-services.ts";
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
        "desc" : "bases mma préparation pour une reprise ou pour un débutant",
        "sport":"MMA",
        "id":1,
        "image" : mma_basic
    },
    {
        "title" :"MMA defensive",
        "level" : 1,
        "desc" : "bases mma pour mieux se défendre debout et au sol (sprawl et déplacement au sol)",
        "sport":"MMA",
        "id":2,
        "image" : mma_basic
    },
    {
        "title" :"striking 101",
        "level" : 1,
        "desc" :"Striking de base pour se construire un striking de base pour le MMA",
        "sport":"MMA",
        "id":4,
        "image" :striking
    },
    {
        "title" :"Boxe 101",
        "level" : 1,
        "desc" : "Jab, crochet , défense et déplacement pour se créer un petit niveau en boxe",
        "sport":"BOXE",
        "id":8,
        "image" :boxing
    },
    {
        "title" :"Cardio Basix",
        "level" : 1,
        "desc" : "se construire un cardio de base pour pratiquer sport de combat et autres afin de pouvoir performer au mieux dans son sport",
        "sport":"FITNESS",
        "id":21,
        "image" :cardio_mma
    }
]


function SearchExercise  ({ route, navigation }) {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([])
    const [search, setSearch] = useState(route.params.search)

    const loadDataCallback = useCallback(async () => {
        console.log("enter callback")
        const db = await getConnexionDB("drills","~drills.db");
        //await deleteTable(db, "exercises")
        //await createTable(db , "exercises");
        
        
        try {
            let stored = await getExerciseItemBySportType(db, search);
            console.log("data", stored)
            if ( stored.length > 0){
                console.log("data store " ,stored );
                setResult(stored)
            }
            else {
                await saveExerciseItem(db, data);
                setResult(data)
                
            }
            return stored;
        }
        catch (error) {
             console.error(error);
             
        }
        let filtered = data.filter(el => el.sport === search.toUpperCase());
        return filtered;
    
    },[])

    useEffect( ()=>{
        console.log("useeffect")
        if(search !== ''){
            loadDataCallback();
            console.log("load search")
        }
        else {
            setResult(data);
        }
        console.log("res ", result )

    },[loadDataCallback])
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