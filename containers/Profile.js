import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import NavBar from "../components/NavBar";

const Profile = ({ navigation }) => {
    return(
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <Text>Profil</Text>
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