import { StyleSheet } from "react-native";

const styles = {
  default : StyleSheet.create({
    container:{
      backgroundColor:"aqua",
      alignItems:"center",
      margin:10,
      borderRadius:10,
      padding:5
    },
    title:{
      fontSize:20
    }
}),
  outline : StyleSheet.create({
    container:{
      backgroundColor:"white",
      alignItems:"center",
      margin:10,
      borderRadius:10,
      padding:5
    },
    title:{
      fontSize:20,
      color:"aqua"
    }
})

}

export default styles