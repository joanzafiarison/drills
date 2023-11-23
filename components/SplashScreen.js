import React from 'react'
import {View, Image, Text} from 'react-native';
import logo from "../images/logo_move.gif"


function SplashScreen() {
  return (
    <View>
        <Image source={logo} width={80} height={80}/>
        <Text>Drills</Text>
    </View>
  )
}

export default SplashScreen