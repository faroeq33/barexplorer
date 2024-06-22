import MapView, { Marker, Region } from "react-native-maps";
import { Bar } from "../../types/types";
import { useState } from "react";
import { StyleSheet } from "react-native";

export const MyMapView = (props: { data: Bar[] }) => {
  const getInitialState = () => {
    return {
      region: {
        latitude: 51.9244,
        longitude: 4.4777,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  };

  const [mapState, setMapState] = useState(getInitialState());

  const onRegionchange = (region: Region) => {
    setMapState({ region });
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={getInitialState().region}
      region={mapState.region}
      onRegionChangeComplete={onRegionchange}
    >
      {props.data.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "90%",
  },
});
