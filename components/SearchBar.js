import { TouchableOpacity, Text, View, TextInput } from 'react-native'
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

function SearchBar () {
    return (
      <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <TextInput placeholder="Entrainement, categorie ..." />
        <TouchableOpacity style={{margin:5}}>
            <Icon name="search"/>
        </TouchableOpacity>
    </View>
    )
}

export default SearchBar