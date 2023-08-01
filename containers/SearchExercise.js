import { StyleSheet, Image, ScrollView, Text, FlatList, TouchableOpacity, TextInput,  View  } from 'react-native'
import React , {useState, useEffect} from 'react';
import Card from "../components/Cards";
import mma_basic from "../images/mma_basic.webp";
import striking from "../images/striking.jpg";
import cardio_mma from "../images/cardio_mma.jpg";
import boxing from "../images/boxing.jpg";

const data = [
    {
        "name" :"MMA basic",
        "level" : 1,
        "sport":"MMA",
        "id":1,
        "image" : mma_basic
    },
    {
        "name" :"MMA defensive",
        "level" : 1,
        "sport":"MMA",
        "id":2,
        "image" : mma_basic
    },
    {
        "name" :"striking 101",
        "level" : 1,
        "sport":"MMA",
        "id":4,
        "image" :striking
    },
    {
        "name" :"Boxe 101",
        "level" : 1,
        "sport":"BOXE",
        "id":8,
        "image" :boxing
    },
    {
        "name" :"Cardio Basix",
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
    useEffect(()=>{
        if(search !== ''){
            let filtered = data.filter(el => el.sport === search.toUpperCase());
            setResult(filtered);
        }
        else {
            setResult(data)
        }
    },[search])
    return (
        <ScrollView>
            <View style={{flexDirection:"row"}}>
                <TextInput placeholder="Entrainement, categorie ..." />
                <TouchableOpacity>
                    <Text>Rech</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={result}
                renderItem={({item}) => <Card 
                                            title={item.name} 
                                            image={item.image}
                                            id={item.id}
                                            navigation={navigation}
                                        />}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}


export default SearchExercise