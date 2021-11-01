import React from "react";
import MapView from "react-native-maps";
import { MapContext } from '../../store/context';

const Map = ({ style }) => {
  const { origin } = React.useContext(MapContext);
  return (
    <MapView
      style={style}
      initialRegion={origin}
      showsUserLocation={true}
      loadingEnabled={true}
    />
  );
};

export { Map };
