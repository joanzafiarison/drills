import React , {useState}from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { format_date } from "../utils/date_format";
import NavBar from "../components/NavBar";
import Graph from "../components/Graph";
import styles from "../styles/Base";


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
                    {userData.objectives.map((obj, k) => (
                        <View key={k}>
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
                    {userData.notes.map((note, k) => (
                        <View key={k}>
                            <Text>{note.note}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <Graph round={1}/>
            <View style={styles.block_dash}>
                <Text>Routines d'entraînement</Text>
                <View>
                    {userData.routines.map((routine,k) => (
                        <View key={k}>
                            <Text>{routine.name} ({routine.duration})</Text>
                            <Text>{format_date(routine.date)}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.button_dash} onPress={()=> navigation.navigate("Search",{
                    search :"mma"
                })}>
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


export default DashBoard