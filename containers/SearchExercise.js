import { StyleSheet, Text, FlatList, TouchableOpacity, TextInput,  View  } from 'react-native'
import React , {useState, useEffect} from 'react'

const data = [
    {
        "name" :"MMA basic",
        "level" : 1,
        "sport":"MMA",
        "id":1
    },
    {
        "name" :"MMA defensive",
        "level" : 1,
        "sport":"MMA",
        "id":2
    },
    {
        "name" :"striking 101",
        "level" : 1,
        "sport":"MMA",
        "id":4
    },
    {
        "name" :"Boxe 101",
        "level" : 1,
        "sport":"BOXE",
        "id":8
    },
    {
        "name" :"Cardio Basix",
        "level" : 1,
        "sport":"FITNESS",
        "id":21
    }
]

function SearchExercise  ({ route }) {
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
        <View style={{flexDirection:"column", alignItems:"center"}}>
            <View style={{flexDirection:"row"}}>
                <TextInput placeholder="Entrainement, categorie ..." />
                <TouchableOpacity>
                    <Text>Rech</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={result}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default SearchExercise