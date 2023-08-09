import { StyleSheet, TouchableOpacity, Text, Image, ScrollView, View } from 'react-native'
import React , {useState, useEffect} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import pallet from "../styles/Colors";

function StartRoutine ( {navigation, route}) {
    const {id, title , stretch, exercises, warm} = route.params;
    const steps = ["Echauffement", "Entraînement", "Endurance"];
    const [step, setStep] = useState(0);
    const [open, setOpen ] = useState([0,1,2]);
    const [pause, setPause] = useState(true);
    const [timer, setTimer] = useState(1);
    
    useEffect(() => {
        const interval_timer = setInterval(()=>{
            setTimer((timer) => timer + 1);
        },1000)
        if (pause) {
            clearInterval(interval_timer);
        }
    },[pause])
    function handleOpen(key){
        let open_keys = open;
        
        if (open_keys.indexOf(key) !== -1){
            open_keys.filter( k => k !== key);
        }
        else {
             open_keys.push(key);
        }
        
        setOpen(open_keys);
    }
    return (
      <ScrollView>
        <View style={{alignItems:"center",justifyContent:"center",height:200, backgroundColor: pallet.secondary[0]}}>
            <Text style={{fontSize:24}}>{title}</Text>
            <Text style={{fontSize:12}}>{steps[step]}</Text>
        </View>
        <View style={{alignSelf:"center"}}>
            <Text style={{fontSize:35}}>{Math.round(timer/60)}:{timer % 60}</Text>
            <TouchableOpacity style={{alignItems :"center", justifyContent:"center", margin:20, width:50,height:50, borderRadius:50, backgroundColor:pallet.primary[0]}} onPress={() => setPause(!pause)}>
                <Text>{pause ? "Pause" : "Start"}</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:"center",marginVertical :30}}>
            {stretch && stretch.map((el, k)=>(
                <TouchableOpacity
                     key={k} 
                     onPress={()=> handleOpen(k)}
                     style={{ padding:10, margin:15, borderRadius:5, width:300, backgroundColor:pallet.secondary[4]}}
                     >
                    <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                        <Text >{el.title}</Text>
                        <Icon name="chevron" size={10}/>
                    </View>
                    <View style={{display: open.indexOf(k) !== -1 ? "flex" :"none",alignItems:"center", margin :20}}>
                        <Image source={el.image} style={{width:200,height:200}}/>
                        <Text>Details</Text>
                    </View>
                    <View style={{width:"80%", height:5, backgroundColor:pallet.primary[0], position:"absolute", bottom:0}}></View>
                </TouchableOpacity>
            ))
            }
        </View>
        <TouchableOpacity style={{alignItems :"center",margin:20}}>
            <Text>Fin!</Text>
        </TouchableOpacity>
      </ScrollView>
    )
}

export default StartRoutine