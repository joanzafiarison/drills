import React , {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function NavBar({ navigation }){
    const [selectedValue, setSelectedValue] = useState("Home");
    
    useEffect( () => {
        const  unsubscribe = navigation.addListener('transitionEnd', (e) => {
            console.log("transition start")
        })
        return unsubscribe;
    }, [navigation]);

    function handleNavigation(path){
      setSelectedValue(path);
      navigation.navigate(path);
    }
    return(
      <View  style={{flexDirection:"row", width:"100%", justifyContent:"space-around"}}>
        <TouchableOpacity 
          onPress={() => handleNavigation("Home")}
          style={[styles.button, selectedValue === "Home" && styles.selected]}
        >
          <Text style={[styles.buttonLabel, selectedValue == "Home" && styles.selectedLabel]}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleNavigation("DashBoard")}
          style={[styles.button, selectedValue == "DashBoard" && styles.selected]}
        >
          <Text style={[styles.buttonLabel, selectedValue =="DashBoard" && styles.selectedLabel]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleNavigation("Profil")}
          style={[styles.button, selectedValue == "Profil" && styles.selected]}
        >
          <Text style={[styles.buttonLabel , selectedValue == "Profil" && styles.selectedLabel]}>Profil</Text>
        </TouchableOpacity>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginVertical:"2%"
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical : 6,
      backgroundColor :"oldlace",
      alignSelf :"flex-start",
      textAlign : "center",
      minWidth : '10%',
      marginHorizontal:"1%",
      marginBottom: 6,
      borderRadius:3
    },
    selected: {
      backgroundColor: 'coral'
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight:'500',
      color: 'coral',
    },
    selectedLabel : {
      color :"white",
    }
  
});
  
export default NavBar