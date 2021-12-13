import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import auth from '@react-native-firebase/auth';

import Button from "../../components/Button/button";
import Input from "../../components/Input/input";

const SingUp = () => {
  const navigation = useNavigation()
  const [data, setData] = useState({ email: "", password: "", repassword: "" })

  const handleBack = () => {
    navigation.navigate("LogIn")
  }

  const handleSingUp = () => {
    if (data.password != data.repassword) {
    return Alert.alert("Password and Repassword are not same");
    } 
     console.log(data) 

    try {
      auth().createUserWithEmailAndPassword(data.email, data.password)
      Alert.alert("User created")
      handleBack()
    } catch (error) {
      Alert.alert("error")
    }
  }

  return (
    <SafeAreaView>
      <Input title="E-mail" onChangeText={email=> setData({ ...data, email})} />
      <Input title="Password" onChangeText={password => setData({ ...data, password})} />
      <Input title="Password Again" onChangeText={repassword => setData({ ...data, repassword })} />
      <Button title="Sing Up" onPress={handleSingUp} />
      <Button title="Back" theme="outline" onPress={handleBack} />
    </SafeAreaView>
  )
}

export default SingUp