import {StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'


function Connexion ({navigation}){
    return (
      <View>
        <Text>Connexion</Text>
        <View>
            <View>
                <Text>Identifiant ou email</Text>
                <TextInput value=''/>
            </View>
            <View>
                <Text>Mot de passe</Text>
                <TextInput value=''/>
            </View>
            <TouchableOpacity>
                <Text>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword") }>
                <Text style={{fontSize :8, color : "grey"}} >Mot de passe oublié</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

export default Connexion