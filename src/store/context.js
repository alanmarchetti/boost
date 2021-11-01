import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

export const MapContext = React.createContext({});

export const MapProvider = ({ children }) => {
 const [origin, setOrigin] = useState(null);

 useEffect(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão de acesso à localização negada");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        enabledHighAccuracy: true,
      });
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);


  return (
    <MapContext.Provider value={{ origin, setOrigin }}>
      {children}
    </MapContext.Provider>
  );
};