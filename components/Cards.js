import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import styleCard from "../styles/Card";

const Card = ({ title }) => {
  return (
    <View style={styleCard.basic_card}>
        <Text>{title}</Text>
    </View>
  )
}

export default Card;