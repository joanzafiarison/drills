import React , {useState, useEffect}from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getConnexionDB } from "../services/db-services.ts";
import NavBar from "../components/NavBar";
import styles from "../styles/Base";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [connect, setConnection] = useState(true);

  useEffect(async ()=>{
    //get connexion
    const db = await getConnexionDB("drills","~drills.db")

    //query Object
    const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
      db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
          resolve(results);
        },
          (error) => {
            reject(error);
          });
      });
    });

    async function CreateTable() {
  
      let userTable = await ExecuteQuery("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, first_name VARCHAR(16), last_name VARCHAR(16), is_deleted INTEGER)", []);
      console.log(userTable);
    }
    async function InsertUser() {
      let singleInsert = await ExecuteQuery("INSERT INTO users (id, first_name, last_name, is_deleted) VALUES ( ?, ?, ?, ?)", [1, 'Infinite', 'Ability', 0]);
      alert(JSON.stringify(singleInsert));
    }
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
    await CreateTable();
    await InsertUser();
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