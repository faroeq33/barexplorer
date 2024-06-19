import axios from "axios";
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
      const response = await axios.get(
        "https://stud.hosted.hr.nl/1041379/barData.json"
      );
      const json = response.data;
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBars();
  }, []);

  return (
    <SafeAreaView className="justify-center flex-1 bg-white">
      <View className="p-4">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <>
                <Text className="font-bold">{item.title}</Text>
                <Text className="pb-4">{item.description}</Text>
              </>
            )}
          />
        )}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
