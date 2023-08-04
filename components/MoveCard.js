import { TouchableOpacity, StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'

function MoveCard ({data, location, navigation}) {
    return (
      <TouchableOpacity style={{flexDirection:"row",marginVertical:"3%", backgroundColor:"grey", borderRadius:5}}onPress={()=>navigation.navigate(location, data)}>
        <Image source={data.image} style={{width:50,height:50}}/>
        <View style={{margin:5}}>
            <Text>{data.title}</Text>
            <Text style={{fontSize:11}}>{data.duration} min</Text>
        </View>
      </TouchableOpacity>
    )
}

export default MoveCard