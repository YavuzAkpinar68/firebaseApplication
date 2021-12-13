import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./inputStyle";


const Input = ({placeholder, onChangeText, title, ...props}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input} 
        placeholder={placeholder}
        onChangeText={onChangeText}/>
    </View>
  )
}

export default Input