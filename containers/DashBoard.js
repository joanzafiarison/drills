import React , {useState}from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import NavBar from "../components/NavBar";
import Graph from "../components/Graph";


const userData = {
    "objectives" : [
        {
            "description": "Routine MMA tous les jours",
            "note": "en phase"
        },
        {
            "description": "Faire 10 tractions",
            "note": "accompli"
        },
        {
            "description": "Faire 10 esquives sparring",
            "note": "a faire"
        }
    ],
    "notes" : [
        {
            "note" : "Privilégier entrainement footwork et les bases"
        },
    ],
    "routines" : [
        {
            "name" : "Routine MMA",
            "duration" : "30m",
            "date": "*/6:00"
        },
        {
            "name" : "Pré Kung fu",
            "duration" : "1h",
            "date": "5/16:00"
        },
        {
            "name" : "Travail Technique",
            "duration" : "1h30",
            "date": "3/18:00"
        },
        {
            "name" : "Renforcement",
            "duration" : "30m",
            "date": "1/18:00"
        },
    ],
    "graph" : [
        {
            "habit" :"Footing",
            "scope":"month",
            "date":"24/08/2023",
            "numbers" : [1,1,1,0,1,1,1]
        }
    ]
}
const DashBoard = ({ navigation }) => {
    const [label, setLabel] = useState("MMA")
    return(
    <ScrollView>
      <View style={styles.container}>
        <NavBar navigation={navigation}/>
        <Text>{label}</Text>
        <View>
            <View style={styles.block_dash}>
                <Text>Mes Objectifs</Text>
                <Text>Semaine</Text>
                <View>
                    {userData.objectives.map((obj) => (
                        <View>
                            <Text>{obj.description}</Text>
                            <Text>{obj.note}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.button_dash} onPress={()=> navigation.navigate("Objectives")}>
                    <Text>Gérer ma routine</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block_dash}>
                <Text>Notes</Text>
                <View>
                    {userData.notes.map((note) => (
                        <View>
                            <Text>{note.note}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <Graph round={1}/>
            <View style={styles.block_dash}>
                <Text>Routines d'entraînement</Text>
                <View>
                    {userData.routines.map((routine) => (
                        <View>
                            <Text>{routine.name} ({routine.duration})</Text>
                            <Text>{routine.date}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.button_dash} onPress={()=> navigation.navigate("Search")}>
                    <Text>Ajouter une routine</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.button_dash} onPress={() => navigation.navigate("CreateExercise")}>
            <Text>Créer +</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginVertical:"2%"
    },
    block_dash : {
      flexDirection :"column",
      alignItems : "center",
      borderWidth : 1,
      borderBottomRadius : 2,
      padding :10,
      margin : 20
    },
    button_dash:{
        backgroundColor : "#C4C4C4",
        borderRadius:5,
        minWidth:"10%",
        width : 100
    }
  })

export default DashBoard