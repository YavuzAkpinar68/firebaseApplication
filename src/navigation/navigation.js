import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LogIn from "../pages/logIn/logIn"
import SingUp from "../pages/singIn/singUp"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SingUp" component={SingUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation