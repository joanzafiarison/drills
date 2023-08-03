import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical:"2%"
      },
      block_dash : {
        flexDirection :"column",
        alignItems : "center",
        borderWidth : 2,
        borderBottomRadius : 2,
        padding :10,
        margin : 20
      },
      button_dash:{
          backgroundColor : "#C4C4C4",
          borderRadius:5,
          minWidth:"10%",
          width : 100,
          margin:5,
          padding:3
      }
});

export default styles;