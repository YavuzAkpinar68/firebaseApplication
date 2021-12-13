import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";

const LogIn = () => {
  const [data, setData] = useState()
  const navigation = useNavigation()

  const handleNavigationSingUp = () => {
    navigation.navigate("SingIn")
  }

  return(
    <SafeAreaView>
      <Input title="E-mail"/>
      <Input title={"Password"}/>
      <Button title="LogIn"/>
      <Button title="SingUp" theme="outline" onPress={handleNavigationSingUp}/>
    </SafeAreaView>
  )
}

export default LogIn