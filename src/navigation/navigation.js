import React, { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import auth from "@react-native-firebase/auth"

import LogIn from "../pages/logIn/logIn"
import SingUp from "../pages/singIn/singUp"
import BikesMap from "../pages/bikesMap/bikesMap"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const [hasSession, setHasSession] = useState(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setHasSession)
    return subscriber
  }, [])

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {!!hasSession ? (
          <Stack.Screen name="BikesMap" component={BikesMap}/>
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LogIn}/>
            <Stack.Screen name="SingUp" component={SingUp}/>
          </>
        )
        
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation