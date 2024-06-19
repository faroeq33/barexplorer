import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import useFetch, { Bar } from "../hooks/useFetch";

function Home() {
  const { data, isLoading } = useFetch();

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

export default Home;
