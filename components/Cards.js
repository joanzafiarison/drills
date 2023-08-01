import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View} from "react-native";
import styleCard from "../styles/Card";

const Card = ({ title, image , navigation, id }) => {
  return (
    <TouchableOpacity 
        style={styleCard.basicCard} 
        onPress={()=>navigation.navigate("ExerciseDetail",{
          id : id
        }
    )}>
        <Image source={image} style={{width:200, height:200}} />
        <Text style={styleCard.textOverlay}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Card;