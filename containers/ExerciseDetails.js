import React , {useState, useEffect} from 'react';
import { ScrollView, View, Text , TouchableOpacity} from "react-native";
import { Svg, G , Path} from 'react-native-svg';
import fonts from "../styles/Fonts";
import MoveCard from "../components/MoveCard";
import quadri from "../images/quadri.webp";
import epaules from "../images/epaule.jpg"; 
import dos from "../images/dos.jpg";
import pallet from "../styles/Colors";


const trainings = [
    {
        "id": 1,
        "title" :"basic mma",
        "stretch" : [
            {
                "id":3,
                "title" : "etirement du dos",
                "type" :"stretch",
                "image" : quadri,
                "rep": 3,
                "duration": 3
            },
            {
                "id":7,
                "title" : "étirement des jambes ",
                "type" :"stretch",
                "image" : epaules,
                "rep":4,
                "duration": 3
            },
            {
                "id":23,
                "title" : "étirement des jambes dynamique",
                "type" :"stretch",
                "image" : dos,
                "rep" :"5s",
                "duration": 3
            },
        ],
        "exercises": [
            {
                "id":34,
                "title" : "jab cross",
                "type" :"exercise",
                "image" : quadri,
                "rep": 3,
                "duration": 15
            },
            {
                "id":21,
                "title" : "sprawl",
                "type" :"exercise",
                "image" : epaules,
                "rep":30,
                "duration": 15
            },
            {
                "id" :45,
                "title" : "hook , high-kick",
                "type" :"exercise",
                "image" : dos,
                "rep" :"5s",
                "duration": 15
            },
        ],
        "warm" : [
            {
                "id":22,
                "title" : "rotation du cou",
                "type" :"warming",
                "image" : quadri,
                "duration": 1
            },
            {
                "id":11,
                "title" : "jab cross",
                "type" :"warming",
                "image" : epaules,
                "duration": 1
            },
            {
                "id":37,
                "title" : "montée de genou",
                "type" :"warming",
                "image" : dos,
                "duration": 1
            },
        ]
    },
    {
        "id": 2,
        "title" :"mma defensive",
        "stretch" : [
            {
                "id":3,
                "title" : "etirement du dos",
                "type" :"stretch",
                "image" : quadri,
                "rep": 3,
                "duration": 3
            },
            {
                "id":7,
                "title" : "étirement des jambes ",
                "type" :"stretch",
                "image" : epaules,
                "rep":4,
                "duration": 3
            },
            {
                "id":23,
                "title" : "étirement des jambes dynamique",
                "type" :"stretch",
                "image" : dos,
                "rep" :"5s",
                "duration": 3
            },
        ],
        "exercises": [
            {
                "id":34,
                "title" : "jab cross slip",
                "type" :"exercise",
                "image" : quadri,
                "rep": 3,
                "duration": 15
            },
            {
                "id":21,
                "title" : "footwork avec la garde",
                "type" :"exercise",
                "image" : epaules,
                "rep":30,
                "duration": 15
            },
            {
                "id" :45,
                "title" : "back step , switch kick",
                "type" :"exercise",
                "image" : dos,
                "rep" :"5s",
                "duration": 15
            },
        ],
        "warm" : [
            {
                "id":22,
                "title" : "rotation du cou",
                "type" :"warming",
                "image" : quadri,
                "duration": 1
            },
            {
                "id":11,
                "title" : "jab cross",
                "type" :"warming",
                "image" : epaules,
                "duration": 1
            },
            {
                "id":37,
                "title" : "montée de genou",
                "type" :"warming",
                "image" : dos,
                "duration": 1
            },
        ]
    },
    {
        "id": 3,
        "title" :"default",
        "stretch" : [
            {
                "id":3,
                "title" : "etirement du dos",
                "type" :"stretch",
                "image" : quadri,
                "rep": 3,
                "duration": 3
            },
            {
                "id":7,
                "title" : "étirement des jambes ",
                "type" :"stretch",
                "image" : epaules,
                "rep":4,
                "duration": 3
            },
            {
                "id":23,
                "title" : "étirement des jambes dynamique",
                "type" :"stretch",
                "image" : dos,
                "rep" :"5s",
                "duration": 3
            },
        ],
        "exercises": [
            {
                "id":34,
                "title" : "jab cross",
                "type" :"exercise",
                "image" : quadri,
                "rep": 3,
                "duration": 15
            },
            {
                "id":21,
                "title" : "sprawl",
                "type" :"exercise",
                "image" : epaules,
                "rep":30,
                "duration": 15
            },
            {
                "id" :45,
                "title" : "hook , high-kick",
                "type" :"exercise",
                "image" : dos,
                "rep" :"5s",
                "duration": 15
            },
        ],
        "warm" : [
            {
                "id":22,
                "title" : "rotation du cou",
                "type" :"warming",
                "image" : quadri,
                "duration": 1
            },
            {
                "id":11,
                "title" : "jab cross",
                "type" :"warming",
                "image" : epaules,
                "duration": 1
            },
            {
                "id":37,
                "title" : "montée de genou",
                "type" :"warming",
                "image" : dos,
                "duration": 1
            },
        ]
    }
];


const ExerciseDetails = ({ route, navigation }) => {
    const {id, title } = route.params;
    const [exerciseData, setExerciseData] = useState({});
    let total_duration = 0;
    let colors = pallet.primary;
    const color_value = colors[Math.floor(Math.random()*colors.length)];


    useEffect(() => {
        let fetched_data = trainings.filter(tr => tr.id === id);
        //alert(JSON.stringify(fetched_data[0]));
        if(fetched_data.length > 0){
            setExerciseData(fetched_data[0]);
            if(Object.keys(exerciseData)>0){
                total_duration = exerciseData.exercises.map(ex => ex.duration).reduce((acc,curr) => acc +curr);
            }
        }
        

        
        
    },[])

    //<path d="M 10 10 H 90 V 90 H 10 L 10 10"/>
  return (
    <ScrollView>
        {Object.keys(exerciseData).length > 0 ?
            <View>
            <View style={{alignItems :"center",justifyContent :"center",height:250,backgroundColor:color_value, position:"relative"}}>
                <Text style={{fontFamily:"Roboto", fontWeight:"600",fontSize:22}}>{title}</Text>
                <Svg style={{position :"absolute", bottom :"-5%",  backgroundColor: color_value}} height={"20%"} width={"100%"}>
                    <Path
                        d="M0,0
                        h400
                        q0,0 20,20
                        v10
                        q0,0 20,20
                        h-450
                        z"
                        stroke={pallet.secondary[3]}
                        fill={pallet.secondary[3]}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </View>
            <View style={{flexDirection:"row", width:"100%",justifyContent:"space-around",marginVertical:30}}>
                <Text>Difficulté 3</Text>
                <Text>{total_duration} min.</Text>
            </View>
            <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
                <Text style={fonts.chapter}>Echauffement</Text>
                <View >
                    {exerciseData.warm.map((ex) => (
                        <MoveCard data={ex} navigation={navigation} key={ex.id} location="MoveDetails"/>
                    ))}
                </View>
            </View>        
            <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
                <Text style={fonts.chapter}>Exercices</Text>
                <View>
                    {exerciseData.exercises.map((ex) => (
                        <MoveCard data={ex} navigation={navigation} key={ex.id} location="MoveDetails"/>
                    ))}
                </View>
            </View>
            <View style={{flexDirection: "column", marginVertical :"8%", marginHorizontal :"8%"}}>
                <Text style={fonts.chapter}>Etirements</Text>
                <View >
                    {exerciseData.stretch.map((ex) => (
                        <MoveCard data={ex} navigation={navigation} key={ex.id} location="MoveDetails"/>
                    ))}
                </View>
            </View>
            <View style={{flexDirection :"row", justifyContent:"space-around"}}>
                <TouchableOpacity
                    style={{backgroundColor : pallet.primary[0], alignSelf :"center", margin :30,padding:5, width :100}}
                    onPress={()=> navigation.navigate('StartRoutine', exerciseData)}
                    >
                    <Text>Commencer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor : pallet.primary[0], alignSelf :"center", margin :30,padding:5, width :100}}
                    onPress={()=> navigation.navigate('AddRoutine',{ 
                        id : 3
                    })}
                    >
                    <Text>Ajouter</Text>
                </TouchableOpacity>
            </View>
            </View>
            :<View style={{alignItems :"center",margin :20}}>
                <Text>Routine non définie</Text>
            </View>
        }
        
    </ScrollView>
  )
}

export default ExerciseDetails