import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export type Bar = {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
};

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Bar[]>([]);

  const getBars = async () => {
    try {
      const response = await fetch(
        "https://stud.hosted.hr.nl/1041379/barData.json"
      );
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBars();
  }, []);

  // show something in a a listview

  const fakeData = [
    { id: "1", title: "Title Text", description: "Description text" },
    { id: "2", title: "Text dude", description: "Description text" },
  ];

  return (
    <SafeAreaView className="justify-center flex-1 bg-white ">
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={fakeData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.description}
              </Text>
            )}
          />
        )}
      </View>
      <View>
        <Text className="text-white">Lil john a milli</Text>
        <Text className="p-4 mt-4 bg-red-800">Thing</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
