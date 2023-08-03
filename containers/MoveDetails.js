import React , {useState, useEffect} from 'react'
import { View, StyleSheet, Image, Text } from "react-native";
import abductors  from "../images/stretch/abductors.jpg"
import psoas from  "../images/stretch/psoas.jpg";
import back from "../images/stretch/back_torsion.jpg"; 
import boxing_base from "../images/exercises/hook.jpg";
import sprawl from "../images/exercises/sprawl.jpg";
import box_warm from "../images/warming/basic_boxing.jpg";
import horizontal_leg_raise from "../images/warming/horizontal_leg_raise.jpg";
import leg_raise from "../images/warming/leg_raise.jpg";
import neck_rotation from "../images/warming/neck_rotation.png";



const moves = [
    {
        "type" : "stretch",
        "id" : 3,
        "title" : "étirement du dos",
        "image" : back,
        "description" :"jambe en avant, autre jambes plié et torsion du buste",
        "duration" : "5 min",
        "usages": [ "mobilité" ]
    },
    {
        "type" : "stretch",
        "id" : 7,
        "title" : "étirement des jambes",
        "image": abductors,
        "description" :"dos sur le sol et jambes sur le mur, étirer le plus possible",
        "duration" : "15 min",
        "usages": [ "mobilité", "kick" ]
    },
    {
        "type" : "stretch",
        "id" : 23,
        "image" : psoas,
        "title" : "étirement des jambes",
        "description" :"une jambe plié et une autre tendue sur le talon",
        "duration" : "15 min",
        "usages": [ "mobilité", "kick" ]
    },
    {
        "type" : "exercise",
        "id" : 34,
        "title" : "jab - cross ",
        "image" : boxing_base,
        "description" :"en position boxe alterné jab - cross",
        "duration" : "15 min",
        "usages": [ "technique de boxe", "cardio" ]
    },
    {
        "type" : "exercise",
        "id" : 21,
        "title" : "sprawl",
        "image" : sprawl,
        "description" :"burpees sans sauter , se laisser descendre au sol en avançant le bassin le plus bas possible",
        "duration" : "15 min",
        "usages": [ "mma" , "cardio" ]
    },
    {
        "type" : "warming",
        "id" : 37,
        "title" : "leg raise",
        "image": leg_raise,
        "description" :"montée de genou",
        "duration" : "1 min",
        "usages": [ "warming","leg", "striking" ]
    },
    {
        "type" : "warming",
        "id" : 22,
        "title" : "neck rotation",
        "image" : neck_rotation,
        "description" :"rotation du coup gauche et droite",
        "duration" : "1 min",
        "usages": [ "warming", "neck" , "lutte"]
    },
    {
        "type" : "warming",
        "id" : 11,
        "title" : "jab cross",
        "image" : box_warm,
        "description" :"serie de jab cross en mouvement",
        "duration" : "5 min",
        "usages": [ "warming" , "arm", "striking" ]
    },
    {
        "type" : "exercise",
        "id" : 45,
        "title" : "hook -  high kick",
        "image" : boxing_base,
        "description" :"crochet et high kick",
        "duration" : "10 min",
        "usages": [ "kick" , "punch" ]
    }
]
const MoveDetails = ({ navigation, route }) => {
    const [move, setMove] = useState({})
    const {id , type} = route.params;

    useEffect(() => {
        const chosenData = moves.filter(item => item.id == id && item.type == type)
        setMove(chosenData[0]);
    },[])
  return (
    <View>
        { move ? 
            <View style={{flexDirection: "column", alignItems:"center"}}>
                <Image source={move.image} style={{maxWidth:"80%",height: 400, margin :"2%"}}/>
                <Text>{move.title}</Text>
                <View>
                    <View style={{flexDirection: "row", justifyContent:"space-around", alignItems:"center", marginVertical:20}}>
                        <Text style={{fontSize : 12}}>{move.duration}</Text>
                        <View style={{flexDirection:"row"}}>
                            {move.usages && move.usages.map((usage) => (
                                <View style={{marginHorizontal:5, backgroundColor:"#E9B44C", padding :4, borderRadius:3}}>
                                    <Text style={{fontSize : 12}}>{usage}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{width:"80%", margin:10}}>
                        <Text>{move.description}</Text>
                    </View>
                </View>
            </View>
            : null
        }
        
    </View>
  )
}

export default MoveDetails