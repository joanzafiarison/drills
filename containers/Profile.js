import React , {useState, useEffect}from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    let data = {
      "name" : "Joan",
      "surname" : "Zafiarison",
      "pseudo" :"bendoFlex",
      "age" :27,
      "weight" : 65,
      "heigth" : 1.70,
      "sports" : ["mma","boxing","muay thai"]

    }
    setUserData(data);
  },[])
    return(
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <Text>Profil</Text>
        <View style={{margin : "5%"}}>
            <Text>Nom : {userData.surname} </Text>
            <Text>Prénom : {userData.name}</Text>
            <Text>Pseudo : {userData.pseudo} </Text>
            <Text>Age : {userData.age}</Text>
            <Text>Poids : {userData.weight} kg</Text>
            <Text>Taille : {userData.heigth} m </Text>
            <Text>Sports : {userData.sports && userData.sports.join(", ")}</Text>
        </View>
        <TouchableOpacity>
          <Text>Modifier</Text>
        </TouchableOpacity>
      </View>

    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginVertical:"2%"
    }
  })

export default Profile