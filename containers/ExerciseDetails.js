import React from 'react';
import { ScrollView, View, Text , TouchableOpacity} from "react-native";
import MoveCard from "../components/MoveCard";
import quadri from "../images/quadri.webp";
import epaules from "../images/epaule.jpg"; 
import dos from "../images/dos.jpg";

const stretch = [
    {
        "id":3,
        "title" : "quadri",
        "type" :"stretch",
        "image" : quadri,
        "rep": 3,
        "link":""
    },
    {
        "id":7,
        "title" : "épaule",
        "type" :"stretch",
        "image" : epaules,
        "rep":4,
        "link":""
    },
    {
        "id":23,
        "title" : "dos",
        "type" :"stretch",
        "image" : dos,
        "rep" :"5s",
        "link":""
    },
]

const exercises = [
    {
        "id":34,
        "title" : "quadri",
        "type" :"exercise",
        "image" : quadri,
        "rep": 3,
        "link":""
    },
    {
        "id":21,
        "title" : "épaule",
        "type" :"exercise",
        "image" : epaules,
        "rep":4,
        "link":""
    },
    {
        "id" :45,
        "title" : "dos",
        "type" :"exercise",
        "image" : dos,
        "rep" :"5s",
        "link":""
    },
]

const warming_up = [
    {
        "id":22,
        "title" : "quadri",
        "type" :"warming",
        "image" : quadri,
        "rep": "15s",
        "link":""
    },
    {
        "id":11,
        "title" : "épaule",
        "type" :"warming",
        "image" : epaules,
        "rep":"10s",
        "link":""
    },
    {
        "id":37,
        "title" : "dos",
        "type" :"warming",
        "image" : dos,
        "rep" :"8s",
        "link":""
    },
]

const ExerciseDetails = ({ route, navigation }) => {
    const {id, title } = route.params;
  return (
    <ScrollView>
        <View style={{alignItems :"center",justifyContent :"center",height:"15%",backgroundColor:"#2660A4"}}>
            <Text style={{fontFamily:"Roboto", fontWeight:"600",fontSize:22}}>{title}</Text>
        </View>
        <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
            <Text style={{fontSize:20, textDecorationLine:"underline"}}>Echauffement</Text>
            <View >
            {warming_up.map((ex) => (
                <MoveCard data={ex} navigation={navigation} key={ex.id} location="MoveDetails"/>
            ))}
            </View>
        </View>        
        <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
            <Text style={{fontSize:20, textDecorationLine:"underline"}}>Exercices</Text>
            <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
            {exercises.map((ex) => (
                <MoveCard data={ex} navigation={navigation} key={ex.id} location="MoveDetails"/>
            ))}
            </View>
        </View>
        <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
            <Text style={{fontSize:20, textDecorationLine:"underline"}}>Etirements</Text>
            <View >
            {stretch.map((ex) => (
                <MoveCard data={ex} navigation={navigation} key={ex.id} location="MoveDetails"/>
            ))}
            </View>
        </View>
        <TouchableOpacity>
            <Text>Commencer</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default ExerciseDetails