import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./bikeMarkerstyle";

const BikeMarker = ({data}) => {
  const {latitude, longitude} = data
  return(
    <Marker
      coordinate={{
        latitude,
        longitude
      }}></Marker>
  )
}

export default BikeMarker