import React from "react";
import { Text, View } from "react-native";
import auth from '@react-native-firebase/auth';

import Button from "../../components/Button/button";

const BikesMap = () => {
  return(
    <View>
      <Text>MAp</Text>
      <Button title="Log Out" onPress={() => auth().signOut()}></Button>
    </View>
  )
}

export default BikesMap