import { StyleSheet, View } from 'react-native';
import { Svg, G, Rect, Circle , Line, Text } from 'react-native-svg';
import React , {useState, useEffect} from 'react';

function MuscleMap () {
    const [muscles , setMuscles] = useState({});
    const color_intensity = ["grey", "brown" ,"orange","coral"];
    useEffect(()=>{
        const m_data = {
            "head" : 0,
            "arm" : 1,
            "leg" :2,
            "body" : 3
        }
        setMuscles(m_data)
    },[])
    return (
      <View style={{backgroundColor:"green"}}>
        <Text>MuscleMap</Text>
        <Svg width={500} height={400}>
             <G y={200}>
                <Rect
                        x="150"
                        y="-120"
                        rx={2.5}
                        width={50}
                        height={50}
                        fill={color_intensity[muscles.head]}
                    />
                <Rect
                        x="140"
                        y="-60"
                        rx={2.5}
                        width={70}
                        height={50}
                        fill={color_intensity[muscles.body]}
                        onPress={()=>alert("pressed body")}
                    />
                <Rect
                        x="140"
                        y="0"
                        rx={2.5}
                        width={20}
                        height={50}
                        fill={color_intensity[muscles.leg]}
                    />
                <Rect
                        x="190"
                        y="0"
                        rx={2.5}
                        width={20}
                        height={50}
                        fill={color_intensity[muscles.leg]}
                    />
                
                <Rect
                        x="80"
                        y="-60"
                        rx={2.5}
                        width={50}
                        height={20}
                        fill={color_intensity[muscles.arm]}
                    />
                
                <Rect
                        x="220"
                        y="-60"
                        rx={2.5}
                        width={50}
                        height={20}
                        fill={color_intensity[muscles.arm]}
                    />
             </G>
        </Svg>
        
      </View>
    )
}

export default MuscleMap