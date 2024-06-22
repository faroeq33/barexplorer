import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  ActivityIndicator,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { Bar, HomeScreenProps } from "../types/types";
import MyText from "../components/typography/MyText";
import MyButton from "../components/buttons/MyButton";
import MapView, { Marker, Region } from "react-native-maps";
import MyHeading from "../components/typography/MyHeading";
import MyTitle from "../components/typography/MyTitle";
import MyAsyncStorage from "../utils/MyAsyncStorage";

function HomeScreen({ navigation }: HomeScreenProps) {
  const { data, isLoading } = useFetch();
  const [isMap, setisMap] = useState<boolean>(false);

  const [saved, setSaved] = useState<Bar[]>([]);

  const getSavedHotSpots = async () => {
    const savedHotSpots = await MyAsyncStorage.get("saved");

    setSaved(savedHotSpots);
    console.log("saved hotspots", savedHotSpots);
  };

  useEffect(() => {
    getSavedHotSpots();
  }, []);

  return (
    <SafeAreaView
      className={`${
        isMap ? "flex-col" : "flex-row"
      } justify-center flex-1 light:bg-white dark:bg-slate-600`}
    >
      <View className={isMap ? "p-0" : "p-4"}>
        {isLoading ? <ActivityIndicator /> : null}

        {/*Geef lokaal opgeslagen info weer*/}
        <View>
          <MyTitle>My Saved Hotspots</MyTitle>
          <FlatList
            data={saved}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => <MyText>{item.title}</MyText>}
          />
        </View>
        {/* toggle between map or list view*/}
        {isMap ? (
          <MyMapView data={data} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <>
                <MyHeading>{item.title}</MyHeading>
                <MyText>{item.description}</MyText>
                <MyButton
                  title={`Bekijk ${item.title}`}
                  onPress={() => {
                    navigation.navigate("Detail", { item });
                  }}
                />
              </>
            )}
          />
        )}

        <MyButton
          title="Toggle View"
          onPress={() => {
            setisMap((isMap) => !isMap);
          }}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const MyMapView = (props: { data: Bar[] }) => {
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

export default HomeScreen;
