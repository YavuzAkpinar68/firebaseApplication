import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./buttonstyle";

const Button = ({title, onPress, theme="default"}) => {
  return(
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Text style={styles[theme].title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button