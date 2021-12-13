import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";

const SingIn = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate("LogIn")
  }

  return(
    <SafeAreaView>
      <Input title = "E-mail"/>
      <Input title="Password"/>
      <Input title="Password Again"/>
      <Button title="Sing Up"/>
      <Button title="Back" theme="outline" onPress={handleBack}/>
    </SafeAreaView>
  )
}

export default SingIn