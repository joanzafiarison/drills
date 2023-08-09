import React from 'react'
import { View, StyleSheet,Image, Text, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
//import Icon from "react-native-vector-icons/FontAwesome";

import mma_icon from "../images/mma.png";
import kickboxing_icon from "../images/kickboxing.webp";
import fitness from "../images/fitness.png";
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
                    <Image source={mma_icon} style={{width:100,height:100}}/>
                    <Text style={{position:"absolute", backgroundColor :"white"}}>MMA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic_card} onPress={() => navigation.navigate("Search", {
                    search : "boxe"
                })}>
                    <Image source={fitness} style={{width:100,height:100}}/>
                    <Text style={{position:"absolute", backgroundColor :"white"}}>Boxe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.basic_card} onPress={() => navigation.navigate("Search", {
                    search :"fitness"
                })}>
                    <Image source={kickboxing_icon} style={{width:100,height:100}}/>
                    <Text style={{position:"absolute", backgroundColor :"white"}}>Fitness</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("CreateExercise")}>
                <Text>Créer</Text>
            </TouchableOpacity>
        </View>
        
        <View>
            <TouchableOpacity style={styles.basic_card} onPress={()=> alert("ça marche")}>
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
        maxHeight :100,
        maxWidth:100,
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