import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState, useRef} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import {Picker} from "@react-native-picker/picker";
import MuscleMap from '../components/MuscleMap';
import Card from "../components/Cards";
import SearchBar from '../components/SearchBar';
import leg_raise from "../images/warming/leg_raise.jpg";

const exercises = [
  {
    "id" : 4,
    "title" : "Leg raise",
    "image" : leg_raise
  }
]

function SucessScreen() {
  return(
    <View>
      <Text>Routine créée</Text>
    </View>
  )
}
function MetaCreation() {
  const durationValue = [300, 600, 900];
  const [duration, setDuration] = useState(1) 
  const [trainingType, setTrainingType] = useState("mma");
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return(
    <View>
        <View style={{alignItems : "center", margin : 30}}>
          <Text>Création d'une routine</Text>
        </View>
        <View>
          <Text>Entrainement</Text>
        <Picker
          ref={pickerRef}
          selectedValue={trainingType}
          onValueChange={(itemValue, itemIndex) =>
            setTrainingType(itemValue)
          }>
            <Picker.Item label="MMA" value="mma" />
            <Picker.Item label="Boxe" value="boxe" />
            <Picker.Item label="Fitness" value="fitness" />
        </Picker>
        </View>
        <View style={{marginVertical:20, marginHorizontal:10}}>
          <Text>Muscle sollicités</Text>
          <View>
            <Text style={{width:200}}>Sport Lutte : ce sport sollicite le dos, les trapèzes et de bons muscles inférieurs</Text>
            <MuscleMap/>
          </View>
        </View>
        <View>
          <Text>Duration</Text>
          <View>
            {durationValue.map((dur,k) => {
              <TouchableOpacity onPress={()=> setDuration(k)}>
                <Text style={{backgroundColor: duration === k? "green" :"grey"}}>{Math.round(dur/60)} m</Text>
              </TouchableOpacity>
            })}
          </View>
        </View>
      </View>
  )
}

function PickExercises () {
  const [selectedExercises, setSelectedExercises] = useState([]);

  function handleExercise(k){
    let exercise_new = selectedExercises;
    exercise_new.push(exercises[k]);
    //alert(JSON.stringify(exercise_new))
    setSelectedExercises(exercise_new);
  }
  return(
    <View>
      <Text>Pick Exercises</Text>
      <View>
        <Text>Exercices choisis</Text>
        <View style={{flexDirection:"row", margin:20}}>
          {selectedExercises.map((ex,k) =>(
            <Card data={ex} key={k}/>
          ))}
        </View>
        <SearchBar/>
        <View style={{flexDirection:"row", margin:20}}>
          {exercises.map((ex,k) =>(
            <View>
              <Card data={ex} key={k}/>
              <TouchableOpacity onPress={() => handleExercise(k)}>
                <Text>Ajouter</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

function ScreenSwitcher({name}){
  switch (name){
    case "meta" :
      return <MetaCreation/>
    case "pick":
      return <PickExercises/>
    case "end":
      return <SucessScreen/>
    default :
      return <View>
        <Text>No components found</Text>
      </View>
  }
}
function CreateExercise () {
  const [step, setStep] = useState(0);
  const step_names = ["meta", "pick","end"];
    return (
      <View>
        <ScreenSwitcher name={step_names[step]}/>
        <View style={{flexDirection:"row", justifyContent:"space-around", margin:20}}>
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