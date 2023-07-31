import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./containers/Home";
import DashBoard from './containers/DashBoard';
import Profile from './containers/Profile';
import ExerciseDetails from './containers/ExerciseDetails';
import CreateExercise from './containers/CreateExercise';
import MoveDetails from './containers/MoveDetails';
import Planification from './containers/Planification';
import SearchExercise from './containers/SearchExercise';
import Objectives from './containers/HandleGoal';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetails}/>
        <Stack.Screen name="CreateExercise" component={CreateExercise}/>
        <Stack.Screen name="MoveDetails" component={MoveDetails}/>
        <Stack.Screen name="Planification" component={Planification}/>
        <Stack.Screen name="Search" component={SearchExercise}/>
        <Stack.Screen name="Objectives" component={Objectives}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
