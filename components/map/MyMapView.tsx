import MapView, { Marker, Region } from "react-native-maps";
import { Bar } from "../../types/types";
import { useState } from "react";
import { StyleSheet } from "react-native";
import useLocation from "../../hooks/useLocation";
import { useThemeContext } from "../../context/ThemeContext";

export const MyMapView = (props: { data: Bar[] }) => {
  const { theme } = useThemeContext();

  const { location } = useLocation();

  //   console.log(console.log(JSON.stringify({ location }, null, 2)));

  const getInitialState = () => {
    return {
      region: {
        latitude: 51.915645718875986,
        longitude: 4.452345839142865,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  };

  const [mapState, setMapState] = useState(getInitialState());

  const onRegionchange = (region: Region) => {
    setMapState({ region });
  };

  const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
    },
  });

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={getInitialState().region}
        region={mapState.region}
        onRegionChangeComplete={onRegionchange}
        showsUserLocation={true}
        showsMyLocationButton={true}
        userInterfaceStyle={theme as "light" | "dark"}
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
    </>
  );
};
