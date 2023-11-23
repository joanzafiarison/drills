import { StyleSheet, Text, TouchableOpacity, ScrollView, View , TextInput} from 'react-native'
import React , {useState, useRef, useEffect} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import {Picker} from "@react-native-picker/picker";
import MuscleMap from '../components/MuscleMap';
import Card from "../components/Cards";
import SearchBar from '../components/SearchBar';
import leg_raise from "../images/warming/leg_raise.jpg";
import neck_rotation from "../images/warming/neck_rotation.png";

const exercises = [
  {
    "id" : 4,
    "title" : "Leg raise",
    "image" : leg_raise
  },
  {
    "id" : 3,
    "title" : "Neck rotation",
    "image" : neck_rotation
  }
]

const meta = [
  {
    "name" :"MMA",
    "id":1,
    "desc":"Sport qui sollicite tous les muscles du corps, nécessite une explosivité et une endurance poussée"
  },
  {
    "name" :"Lutte",
    "id":2,
    "desc":"Sport Lutte : ce sport sollicite le dos, les trapèzes et de bons muscles inférieurs"
  },
  {
    "name" :"Boxe",
    "id":3,
    "desc":"Sport qui sollicite endurance et puissance au niveaux ddes épaules et des apuis"
  },
  {
    "name" :"Fitness",
    "id":4,
    "desc":"Sport pour une Remise ou forme ou être mieux dans sa peau"
  }
]

function SucessScreen() {
  return(
    <View style={{height:500}}>
      <View style={{position:'absolute', top:"40%", left:"20%", width:"60%", padding:20, backgroundColor:"#C4C4C4", justifyContent : "center", alignItems :"center"}}>
        <Text style={{ fontSize:17}}>Votre entrainement “ routine mma” a été enregistrée</Text>
        <View style={{backgroundColor :"green", borderRadius:30 , margin :20, padding :5}}>
          <Icon name="check" size={40} color="white"/>
        </View>
      </View>
    </View>
  )
}
function MetaCreation() {
  const durationValue = [300, 600, 900];
  const [duration, setDuration] = useState(1) 
  const [trainingType, setTrainingType] = useState("MMA");
  const [metadata, setMetadata] = useState({});
  const [training_name, setTrainingName] = useState('Training')
  const pickerRef = useRef();

  useEffect(()=> {
    let training_data = meta.filter(it => it.name == trainingType);
    setMetadata(training_data[0]);
  },[trainingType])

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return(
    <View>
        <View style={{alignItems : "center", margin : 30}}>
          <Text style={{fontSize:21}}>Création d'une routine</Text>
        </View>
        <View style={{flexDirection :"column", alignItems: "center"}}>
          <TextInput style={{alignSelf:"flex-start", marginHorizontal : 5}} value={training_name} onChangeText={(text)=>setTrainingName(text)}/>
          <Text>Choisir un entrainement</Text>
          <Text>Nom :</Text>
          <Picker
            ref={pickerRef}
            style={{width:"60%", backgroundColor:"white", margin :5}}
            selectedValue={trainingType}
            onValueChange={(itemValue, itemIndex) =>
              setTrainingType(itemValue)
            }>
              <Picker.Item label="MMA" value="MMA" />
              <Picker.Item label="Boxe" value="Boxe" />
              <Picker.Item label="Fitness" value="Fitness" />
              <Picker.Item label="Lutte" value="Lutte" />
          </Picker>
        </View>
        <View style={{flexDirection:"row", alignItems :"center", marginVertical:20, marginHorizontal:10}}>
          <View>
            <Text>{metadata.name}</Text>
            <Text style={{width:200}}>{metadata.desc}</Text>
          </View>
          <MuscleMap sport={trainingType}/>
        </View>
        <View>
          <Text>Duration</Text>
          <View style={{flexDirection :"row", justifyContent:"space-around"}}>
            {durationValue.map((dur,k) => (
              <TouchableOpacity onPress={()=> setDuration(k)} style={{alignItems:"center", justifyContent :"center", minHeight:30, minWidth:30, borderRadius :20, backgroundColor: duration === k? "green" :"grey"}} key={k}>
                <Text>{Math.round(dur/60)} m</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
  )
}

function PickExercises ({ navigation }) {
  const steps = ["echauffement", "exercise", "etirement"];
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(()=> {
  },[selectedExercises]);

  function handleExercise(k){
    let exercise_new = [...selectedExercises];
    exercise_new.push(exercises[k]);
    setSelectedExercises(exercise_new);
  }
  return(
    <View>
      <View style={{alignSelf : "center", margin :10}}>
        <Text style={{fontSize:22}}>Sélection</Text>
        <Text style={{fontSize:18}}>{steps[step]}</Text>
        <Text>{selectedExercises.length} exercise(s)</Text>
      </View>
      <View>
        <View style={{flexDirection:"row", margin:20, minHeight:150}}>
          {selectedExercises.map((ex,k) =>(
            <Card data={ex} key={k} height={100} width={100}/>
          ))}
        </View>
        <SearchBar/>
        <View style={{flexDirection:"row", margin:20, minHeight:100}}>
          {exercises.map((ex,k) =>(
            <View style={{position:"relative"}}>
              <Card data={ex} key={k} navigation={navigation} height={100} width={100} />
              <TouchableOpacity onPress={() => handleExercise(k)} style={{position:'absolute',bottom :"3%", right:"3%",backgroundColor:"grey", padding:2}}>
                <Text>Ajouter</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

function ScreenSwitcher({name, navigation}){
  switch (name){
    case "meta" :
      return <MetaCreation/>
    case "pick":
      return <PickExercises/>
    case "end":
      return <SucessScreen/>
    case "return" : 
      navigation.navigate("Home");
    default :
      return <View>
        <Text>No components found</Text>
      </View>
  }
}
function CreateExercise ({navigation}) {
  const [step, setStep] = useState(0);
  const step_names = ["meta", "pick","end","return"];
    return (
      <View>
        <ScreenSwitcher name={step_names[step]} navigation={navigation}/>
        <View style={{flexDirection:"row", justifyContent:"space-around",margin:20}}>
          <TouchableOpacity onPress={() => step > 0 && setStep(step -1)}>
            <Icon name="arrow-left" size={40}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>step < step_names.length -1 && setStep(step + 1)}>
            <Icon name="arrow-right" size={40}/>
          </TouchableOpacity>
        </View>
        
      </View>
    )
}

export default CreateExercise