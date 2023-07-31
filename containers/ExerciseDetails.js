import React from 'react';
import { View, Text , TouchableOpacity} from "react-native";

const stretch = [
    {
        "name" : "quadri",
        "image" : "",
        "rep": 3,
        "link":""
    },
    {
        "name" : "épaule",
        "image" : "",
        "rep":4,
        "link":""
    },
    {
        "name" : "dos",
        "image" : "",
        "rep" :"5s",
        "link":""
    },
]

const exercises = [
    {
        "name" : "quadri",
        "image" : "",
        "rep": 3,
        "link":""
    },
    {
        "name" : "épaule",
        "image" : "",
        "rep":4,
        "link":""
    },
    {
        "name" : "dos",
        "image" : "",
        "rep" :"5s",
        "link":""
    },
]

const warming_up = [
    {
        "name" : "quadri",
        "image" : "",
        "rep": "15s",
        "link":""
    },
    {
        "name" : "épaule",
        "image" : "",
        "rep":"10s",
        "link":""
    },
    {
        "name" : "dos",
        "image" : "",
        "rep" :"8s",
        "link":""
    },
]

const ExerciseDetails = () => {
  return (
    <View>
        <Text>Routine</Text>
        <View style={{flexDirection: "row"}}>
            <Text>Echauffement</Text>
            {warming_up.map((ex) => (
                <TouchableOpacity>
                    <Text>{ex.name}</Text>
                </TouchableOpacity>
            ))}
        </View>        
        <View style={{flexDirection: "row"}}>
            <Text>Exercices</Text>
            {exercises.map((ex) => (
                <TouchableOpacity>
                    <Text>{ex.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={{flexDirection: "row"}}>
            <Text>Etirements</Text>
            {stretch.map((ex) => (
                <TouchableOpacity>
                    <Text>{ex.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

export default ExerciseDetails