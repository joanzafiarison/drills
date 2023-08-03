import {StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'


function ForgotPassword(){
    return (
        <View>
            <Text>Renseignez votre email :</Text>
            <TextInput value='email'/>
            <TouchableOpacity>
                <Text>Valider</Text>
            </TouchableOpacity>
        </View>
    )   
}

export default ForgotPassword;