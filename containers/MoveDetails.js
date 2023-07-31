import React from 'react'
import { View, StyleSheet, Image, Text } from "react-native";

const MoveDetails = ({name, duration, usages, description, image}) => {
  return (
    <View>
        <Image source={image}/>
        <Text>{name}</Text>
        <View>
            <Text>{duration}</Text>
            <View>
                {usages.map((usage) => (
                    <View>
                        <Text>{usage}</Text>
                    </View>
                ))}
            </View>
            <View>
                <Text>{description}</Text>
            </View>
        </View>
    </View>
  )
}

export default MoveDetails