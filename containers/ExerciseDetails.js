import React from 'react';
import { View, Text , TouchableOpacity} from "react-native";
import Card from "../components/Cards";
import quadri from "../images/quadri.webp";
import epaules from "../images/epaule.jpg"; 
import dos from "../images/dos.jpg";

const stretch = [
    {
        "id":4,
        "name" : "quadri",
        "image" : quadri,
        "rep": 3,
        "link":""
    },
    {
        "id":2,
        "name" : "épaule",
        "image" : epaules,
        "rep":4,
        "link":""
    },
    {
        "id":1,
        "name" : "dos",
        "image" : dos,
        "rep" :"5s",
        "link":""
    },
]

const exercises = [
    {
        "id":1,
        "name" : "quadri",
        "image" : quadri,
        "rep": 3,
        "link":""
    },
    {
        "id":1,
        "name" : "épaule",
        "image" : epaules,
        "rep":4,
        "link":""
    },
    {
        "id":1,
        "name" : "dos",
        "image" : dos,
        "rep" :"5s",
        "link":""
    },
]

const warming_up = [
    {
        "id":1,
        "name" : "quadri",
        "image" : quadri,
        "rep": "15s",
        "link":""
    },
    {
        "id":1,
        "name" : "épaule",
        "image" : epaules,
        "rep":"10s",
        "link":""
    },
    {
        "id":1,
        "name" : "dos",
        "image" : dos,
        "rep" :"8s",
        "link":""
    },
]

const ExerciseDetails = ({ route, navigation }) => {
    const id  = route.params.id;
  return (
    <View>
        <Text>Routine {id}</Text>
        <View style={{flexDirection: "column", margin :"2%"}}>
            <Text>Echauffement</Text>
            <View style={{flexDirection: "row"}}>
            {warming_up.map((ex) => (
                <Card title={ex.name} navigation={navigation} id={ex.id} image={ex.image}/>
            ))}
            </View>
        </View>        
        <View style={{flexDirection: "column", margin :"2%"}}>
            <Text>Exercices</Text>
            <View style={{flexDirection: "row"}}>
            {exercises.map((ex) => (
                <Card title={ex.name} navigation={navigation}  id={ex.id} image={ex.image}/>
            ))}
            </View>
        </View>
        <View style={{flexDirection: "column", margin :"2%"}}>
            <Text>Etirements</Text>
            <View style={{flexDirection: "row"}}>
            {stretch.map((ex) => (
                <Card title={ex.name} navigation={navigation}   id={ex.id} image={ex.image}/>
            ))}
            </View>
        </View>
    </View>
  )
}

export default ExerciseDetails