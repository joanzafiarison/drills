import React , {useState, useEffect}from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import styles from "../styles/Base";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [connect, setConnection] = useState(true);

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
        {Object.keys(userData).length > 0 && connect?
              <View style={{margin : "5%"}}>
                <Text>Nom : {userData.surname} </Text>
                <Text>Prénom : {userData.name}</Text>
                <Text>Pseudo : {userData.pseudo} </Text>
                <Text>Age : {userData.age}</Text>
                <Text>Poids : {userData.weight} kg</Text>
                <Text>Taille : {userData.heigth} m </Text>
                <Text>Sports : {userData.sports && userData.sports.join(", ")}</Text>
            </View>
            :<View>
              <Text>Profil invité</Text>
              <TouchableOpacity style={styles.button_dash} onPress={() => navigation.navigate("Connexion")}>
                <Text>Se connecter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_dash} onPress={() => navigation.navigate("Register")}>
                <Text>Faire parti de la team</Text>
              </TouchableOpacity>
            </View>
        }

        <TouchableOpacity style={styles.button_dash}>
          <Text>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_dash} onPress={()=>setUserData({})}>
          <Text>Se déconnecter</Text>
        </TouchableOpacity>
      </View>

    )
  }
  

export default Profile