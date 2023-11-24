import {StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import { storedUserSession, retrieveUserSession } from "../services/auth.ts";

const URL_API= "http://192.168.195.128";

function Connexion ({navigation}){
    const [ email , setMail] = useState('');
    const [ password, setPassword ] = useState('');
    
    useEffect(() => {
        alert("useEffect")
        async function getToken () {
            const token = await retrieveUserSession("token");
            if (token) {
              alert("found",token);
            } 
        }
        getToken();
        
    },[]);

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
        fetch(`${URL_API}:5000/auth`, args)
            .then(async (response) => {
                //alert(response.headers.map.authorization);
                alert(response.headers.map.authorization);
                const token = await storedUserSession("token",response.headers.map.authorization);
                alert(token);
                //return response.json();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    return (
      <View style={styles.mainCard}>
        <View style={{...styles.cardCentered, ...styles.shadowProp}}>
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
                    <Text style={styles.littleFont} >Mot de passe oublié</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Register") }>
                    <Text >Vous n'êtes pas membre ? Créer un compte</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    mainCard : {
        display:"flex",
        flexDirection:"column",
        alignItems :"center"
    },
    cardCentered : {
        width : "50%",
        display :"flex",
        flexDirection:"column",
        alignItems :"center" ,
        marginTop :30,
        padding :20,
        backgroundColor :"white"
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    littleFont: {
        fontSize :8,
        color : "grey"
    }
});





export default Connexion