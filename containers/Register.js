import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react';
import stylesForm from "../styles/Form";
import stylesBase from "../styles/Base";


function ScreenSwitcher (name) {
    switch (name){
        case "base":
            return  <View style={stylesForm.form}>
            <View>
                <TextInput value='nom'/>
            </View>
            <View>
                <TextInput value='prenom'/>
            </View>
            <View>
                <TextInput value='pseudo'/>
            </View>
            <View>
                <TextInput value='email'/>
            </View>
            <View>
                <TextInput value='mot de passe'/>
            </View>
        </View>
        case "body":
                return<View style={stylesForm.form}>
                    <View>
                        <TextInput value='age'/>
                    </View>
                    <View>
                        <TextInput value='poids'/>
                    </View>
                    <View>
                        <TextInput value='taille'/>
                    </View>
                </View>
        case "sports":
            return <View style={stylesForm.form}>
                <TextInput value="sport"/>
            </View>
        default :
            return <Text>Fin</Text>
    }
}
function Register ( { navigation }) {
    const steps = ["base", "body", "sports"];
    const [step, setStep] = useState(0);
    return (
      <View>
        <Text>Register</Text>
        <ScreenSwitcher name={steps[step]}/>
        <TouchableOpacity onPress={() => setStep(step + 1)}>
            <Text>Valider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStep(step - 1)}>
            <Text>Retour</Text>
        </TouchableOpacity>
      </View>
    )
}


export default Register