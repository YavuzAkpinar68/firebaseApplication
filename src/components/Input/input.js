import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./inputStyle";


const Input = ({value, placeholder, onChangeText, title}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input} 
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}/>
    </View>
  )
}

export default Input