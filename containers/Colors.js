import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState} from 'react';
import pallet from "../styles/Colors";

function Colors (){
    const colors = pallet.primary;
    const secondColors = pallet.secondary;
    const [color, setColor] = useState(0);
    const [secondColor, setSecondColor] = useState(1);
    return (
      <View>
        <View style={{alignItems:"center"}}>
            <Text style={{fontFamily :'Montserrat'}}>Primary color</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                {colors.map((color,k) => (
                    <TouchableOpacity key={k} style={{alignItems:"center",justifyContent:"center",width:50,height:50,backgroundColor:color}} onPress={() => setColor(k) }>
                        <Text>{color}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
        <View style={{alignItems:"center"}}>
            <Text>Secondary color</Text>
            <View style={{flexDirection:'row'}}>
                {secondColors.map((color,k) => (
                    <TouchableOpacity key={k} style={{alignItems:"center",justifyContent:"center",width:50,height:50,backgroundColor:color}} onPress={() => setSecondColor(k) }>
                        <Text>{color}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
        <View style={{alignItems:"center",marginVertical:20}}>
            <View style={{alignItems:"center",justifyContent:"center",backgroundColor:colors[color],width:200,height:100}}>
                <Text style={{fontFamily:"Montserrat"}}>Banner</Text>
            </View>
            <View style={{marginVertical:20}}>
                {[0, 1, 2].map((el,k) => (
                    <View style={{backgroundColor:secondColors[secondColor],...styles.listElement,...styles.shadowProp }}>
                        <Text>List</Text>
                    </View>
                ))}

            </View>
        </View>

      </View>
    )
}
const styles = StyleSheet.create({
    listElement : {
        width:200,
        padding :5,
        margin : 5
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})

export default Colors