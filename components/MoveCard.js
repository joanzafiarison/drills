import { TouchableOpacity, StyleSheet, Image,Text, View } from 'react-native'
import React from 'react';
import colors from "../styles/Colors";
function MoveCard ({data, location, navigation}) {
    return (
      <TouchableOpacity style={{flexDirection:"row",marginVertical:"3%", backgroundColor:colors.secondary[3], borderRadius:7, padding :10}}onPress={()=>navigation.navigate(location, data)}>
        <Image source={data.image} style={{width:50,height:50}}/>
        <View style={{margin:5}}>
            <Text style={{fontWeight:600}}>{data.title}</Text>
            <Text style={{fontSize:11}}>{data.duration}:00 </Text>
        </View>
      </TouchableOpacity>
    )
}

export default MoveCard