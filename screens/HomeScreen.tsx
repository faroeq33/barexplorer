import React from "react";
import { StatusBar } from "expo-status-bar";

import { ActivityIndicator, FlatList, View, SafeAreaView } from "react-native";
import useFetch from "../hooks/useFetch";
import { HomeScreenProps } from "../navigation/types";
import MyText from "../components/typography/MyText";
import MyButton from "../components/buttons/MyButton";

function HomeScreen({ navigation }: HomeScreenProps) {
  const { data, isLoading } = useFetch();

  return (
    <SafeAreaView className="justify-center flex-1 light:bg-white dark:bg-slate-600">
      <View className="p-4">
        {isLoading ? (
          <ActivityIndicator />
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
          title="Go to Details"
          onPress={() => navigation.navigate("Detail")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default HomeScreen;
