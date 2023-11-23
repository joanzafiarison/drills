import {StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React, {useState, useEffect} from 'react';


function Connexion ({navigation}){
    const [ email , setMail] = useState('');
    const [ password, setPassword ] = useState('');
    
    const onPress = () => {
        
        let args = {
            method : "POST",
            headers : {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type":"application/json;charset=utf-8"
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }
        //alert(JSON.stringify(args));
        fetch("http://192.168.1.68:5000/auth", args)
            .then(response => response.json())
            .then(dt => alert(JSON.stringify(dt)))
            .catch(error => alert(JSON.stringify(error)));
    }
    return (
      <View style={{display:"flex", flexDirection:"column", alignItems :"center", width :"50%", backgroundColor :"white"}}>
        <Text>Connexion</Text>
        <View>
            <View>
                <Text>Identifiant ou email</Text>
                <TextInput 
                    defaultValue={email}
                    placeholder= "Email..."
                    onChangeText={ newEmail => setMail(newEmail)}
                />
            </View>
            <View>
                <Text>Mot de passe</Text>
                <TextInput 
                    secureTextEntry={true}
                    onChangeText={ pass => setPassword(pass)}
                />
            </View>
            <TouchableOpacity onPress={onPress}>
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