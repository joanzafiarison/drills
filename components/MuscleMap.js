import { StyleSheet, View } from 'react-native';
import { Svg, G, Rect, Circle , Line, Text } from 'react-native-svg';
import React , {useState, useEffect} from 'react';


const intensityMap = {
    "MMA" : {
        "head" : 1,
        "arm" : 2,
        "leg" :2,
        "body" : 3
    },
    "Lutte" : {
        "head" : 2,
        "arm" : 1,
        "leg" :3,
        "body" : 3 
    },
    "Boxe" : {
        "head" : 1,
        "arm" : 1,
        "leg" :2,
        "body" : 3
    },
    "Fitness" : {
        "head" : 0,
        "arm" : 1,
        "leg" :1,
        "body" : 2
    }
}
function MuscleMap ({ sport }) {
    const [muscles , setMuscles] = useState({});
    const color_intensity = ["grey", "brown" ,"orange","coral"];
    useEffect(() => {
        setMuscles(intensityMap[sport])
    });
    return (
      <View style={{backgroundColor:"green",width:"60%"}}>
        <Text>MuscleMap</Text>
        <Svg width={300} height={300}>
             <G y={200}>
                <Rect
                        x="100"
                        y="-120"
                        rx={2.5}
                        width={20}
                        height={20}
                        fill={color_intensity[muscles.head]}
                    />
                <Rect
                        x="90"
                        y="-95"
                        rx={2.5}
                        width={40}
                        height={40}
                        fill={color_intensity[muscles.body]}
                        onPress={()=>alert("pressed body")}
                    />
                <Rect
                        x="90"
                        y="-50"
                        rx={2.5}
                        width={15}
                        height={40}
                        fill={color_intensity[muscles.leg]}
                    />
                <Rect
                        x="115"
                        y="-50"
                        rx={2.5}
                        width={15}
                        height={40}
                        fill={color_intensity[muscles.leg]}
                    />
                
                <Rect
                        x="40"
                        y="-100"
                        rx={2.5}
                        width={40}
                        height={10}
                        fill={color_intensity[muscles.arm]}
                    />
                
                <Rect
                        x="140"
                        y="-100"
                        rx={2.5}
                        width={40}
                        height={10}
                        fill={color_intensity[muscles.arm]}
                    />
             </G>
        </Svg>
        
      </View>
    )
}

export default MuscleMap