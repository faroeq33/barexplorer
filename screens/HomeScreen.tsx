import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  ActivityIndicator,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { HomeScreenProps } from "../navigation/types";
import MyText from "../components/typography/MyText";
import MyButton from "../components/buttons/MyButton";
import MapView from "react-native-maps";

function HomeScreen({ navigation }: HomeScreenProps) {
  const { data, isLoading } = useFetch();
  const [isMap, setisMap] = useState<boolean>(false);

  return (
    <SafeAreaView className="justify-center flex-1 light:bg-white dark:bg-slate-600">
      <View className="p-4">
        {isLoading ? <ActivityIndicator /> : null}

        {/* toggle between map or list view*/}
        {isMap ? (
          <MapView style={styles.map} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <>
                <MyText>{item.title}</MyText>
                <MyText>{item.description}</MyText>
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

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "90%",
  },
});

export default HomeScreen;
