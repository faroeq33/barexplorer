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
import useFetch from "../hooks/useFetch";
import { HomeScreenProps } from "../navigation/types";

function HomeScreen({ navigation }: HomeScreenProps) {
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
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Detail")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default HomeScreen;
