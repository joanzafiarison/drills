
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    basicCard :{
        flexDirection:"row",
        justifyContent:"center",
        alignItems :"center",
        minWidth:100,
        marginVertical:"2%",
        marginHorizontal :"2%"
    },
    textOverlay : {
        backgroundColor :"black",
        position :"absolute",
        color:"white",
        top:"50%"
    }
})
export default styles;