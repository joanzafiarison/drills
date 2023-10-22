import React , {useState, useEffect, useCallback}from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getConnexionDB, deleteTable } from "../services/db-services.ts";
import { getUserItem, saveUserItem, createTable } from "../services/user-services.ts";
import NavBar from "../components/NavBar";
import styles from "../styles/Base";



const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([])
  const [connect, setConnection] = useState(true);

  const loadDataCallback = useCallback ( async () => {
    try {
      const initData = [{id : 0, username:"bendo", email:"jack.ouille@gmail.com"}, {id : 1, username:"jackouille", email:"bendo@gmail.com"}]
      //connexion
      let db = await getConnexionDB("drills","~drills.db");
      //init la db
      //await deleteTable(db, "users");
      //await createTable(db,"users");
      //récupérer users
      const storedUser = await getUserItem(db);
      if(storedUser.length > 0){
        // mapper au state
        console.log("stored user", storedUser)
        setUsers(storedUser)
      }
      else{
        //ajouter dans la db et mapper au state
        console.log("create users")
        await saveUserItem(db, initData)
        setUsers(initData)
      }

    }
    catch (error){
      console.error(error)
    }
  },[])

  useEffect(()=>{
    console.log("user found",users)
    //query Object
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
    loadDataCallback();
    
  },[loadDataCallback])
    return(
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <Text>Profil</Text>
        {users && users.length > 0 ? 
          <View>
            <Text>Users DB</Text>
            {users.map(el => (
              <Text>{el.username}</Text>
            ))}
          </View>
          : null 
        }
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