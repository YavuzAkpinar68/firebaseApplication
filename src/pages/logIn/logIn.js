import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";

const LogIn = () => {
  const [data, setData] = useState({email: "", password: ""})
  const navigation = useNavigation()

  const handleNavigationSingUp = () => {
    navigation.navigate("SingUp")
  }

  const handleLogIn = () => {
    console.log(data)
  }

  return(
    <SafeAreaView>
      <Input 
        title="E-mail"  
        onChangeText={text => setData({...data, email:text})}/>
      <Input 
        title="Password"
        secureTextEntry={true}  
        onChangeText={password => setData({...data, password})}/>
      <Button 
        title="LogIn" 
        onPress={handleLogIn}/>
      <Button 
        title="SingUp" 
        theme="outline" 
        onPress={handleNavigationSingUp}/>
    </SafeAreaView>
  )
}

export default LogIn