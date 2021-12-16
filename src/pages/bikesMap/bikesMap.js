import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import Button from "../../components/Button/button";
import MapView, { Marker } from "react-native-maps";
import  Icon  from "react-native-vector-icons/EvilIcons";
import BikeMarker from "../../components/BikeMarker/bikeMarker";

const BikesMap = () => {
  const [bikes, setBikes] = useState([])

  const listenBikeChanges = () => {
     database().ref("/bikes")
    .on("value",snapshot => {
      const bikeData = snapshot.val();
      
      const parsedBikeData = Object.keys(bikeData).map(k => ({
        id: k,
        ...bikeData[k]
      }))
      setBikes(parsedBikeData)
      
    })
  }

  useEffect(() => {
    listenBikeChanges()
    console.log(bikes)
  }, [])

  return(
    <MapView style={{flex:1}}>
      {bikes.map(b => 
        <BikeMarker 
        key={b.id}
        data={b}/>
      )}
     
    </MapView>
    
      
   
  )
}

export default BikesMap