import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
//import StyleCard from "../styles/Card";
//import Cards from '../components/Card';

const Home =  ({ navigation }) => {
    return(
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <Text>Drills</Text>
        <View>
            <Text style={styles.title}>Favoris</Text>
            <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.basic_card} onPress={() => navigation.navigate("Search", {
                    search : "mma"
                })}>
                    <Text>MMA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic_card} onPress={() => navigation.navigate("Search", {
                    search : "boxe"
                })}>
                    <Text>Boxe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic_card} onPress={() => navigation.navigate("Search", {
                    search :"fitness"
                })}>
                    <Text>Fitness</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("CreateExercise")}>
                <Text>Créer une routine</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.title}>Note du jour</Text>
            <View style={styles.note_card}>
                <Text>Petit pas petit pas, i acheve un tas</Text>
            </View>
        </View>
        <View>
            <Text style={styles.title}>Routines a intégrer</Text>
            <TouchableOpacity style={styles.basic_card} onPress={()=> navigation.navigate("ExerciseDetail")}>
                <Text>Routine MMA</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginVertical:"2%"
    },
    title : {
        margin :10,
        fontSize:18,
        textAlign: "center"
    },
    rowContainer : {
        flexDirection :"row",
        justifyContent:"space-around"
    },
    basic_card : {
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "center",
        minHeight :100,
        minWidth:100,
        backgroundColor :"grey",
        margin :10
    },
    note_card : {
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "center",
        minHeight :100,
        width : "100%",
        backgroundColor :"grey",
        margin :10
    }
  })

export default Home