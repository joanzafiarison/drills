import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View} from "react-native";
import styleCard from "../styles/Card";

const Card = ({  navigation, data, location, width = 200, height = 200 }) => {
  return (
    <TouchableOpacity 
        style={styleCard.basicCard} 
        onPress={()=>navigation.navigate(location, data)}
    >
        <Image source={data.image} style={{width:width, height: height}} />
        <Text style={styleCard.textOverlay}>{data.title}</Text>
    </TouchableOpacity>
  )
}

export default Card;