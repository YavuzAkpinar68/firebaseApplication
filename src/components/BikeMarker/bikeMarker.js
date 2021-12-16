import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./bikeMarkerstyle";
import  Icon  from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

const BikeMarker = ({data}) => {
  const {latitude, longitude, inUsage} = data

  const themeColor = inUsage === 1 ? "red" : "blue";

  return(
    <Marker
      coordinate={{
        latitude,
        longitude
      }}>
      <View style={[styles.container, {borderColor:themeColor}]}>
        <Icon name="bicycle" size={20} color={themeColor}/>
      </View>
    </Marker>
  )
}

export default BikeMarker