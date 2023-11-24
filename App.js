import React , {useContext} from 'react';
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
import Connexion from "./containers/Connexion";
import ForgotPassword from './containers/ForgotPassword';
import Register from './containers/Register';
import Colors from './containers/Colors';
import StartRoutine from './containers/StartRoutine';
import SecureStore from "./containers/SecureStore";

import { AuthProvider } from "./services/authContext.tsx";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="Profil" component={Profile} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetails}/>
          <Stack.Screen name="CreateExercise" component={CreateExercise}/>
          <Stack.Screen name="MoveDetails" component={MoveDetails}/>
          <Stack.Screen name="Planification" component={Planification}/>
          <Stack.Screen name="Search" component={SearchExercise}/>
          <Stack.Screen name="Objectives" component={Objectives}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
          <Stack.Screen name="Colors" component={Colors}/>
          <Stack.Screen name="StartRoutine" component={StartRoutine}/>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>

  );
}


//<Stack.Screen name="Secure" component={SecureStore}/>