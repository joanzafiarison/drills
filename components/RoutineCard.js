import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React ,{ useState } from 'react'; 
import Icon from "react-native-vector-icons/FontAwesome";
import FTIcon from "react-native-vector-icons/Fontisto";

function  RoutineCard ( {data, location, navigation}) {
    return (
      <TouchableOpacity style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", margin:10, padding : 10, borderRadius :10, backgroundColor:"white"}} onPress={()=> navigation.navigate(location, data)}>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <Image source={data.image} style={{width:80,height:80}}/>
            <View style={{marginHorizontal:7}}>
                <Text>{data.title}</Text>
                <View style={{}}>
                    <Icon name="star" size={15} color="#"/>
                    <Text>30min</Text>
                </View>
            </View>
        </View>
        <FTIcon name="favorite" size={30} color="black"/>
      </TouchableOpacity>
    )
}

export default RoutineCard