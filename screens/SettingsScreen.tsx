import { Button, FlatList, ScrollView, Switch, View } from "react-native";
import { SettingsScreenProps } from "../navigation/types";
import MyTitle from "../components/typography/MyTitle";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import MyHeading from "../components/typography/MyHeading";
import { Bar } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import MyAsyncStorage from "../utils/MyAsyncStorage";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { theme, toggleTheme, isDarkMode } = useThemeContext();
  const [saved, setSaved] = useState<Bar[]>([]);

  const getSavedHotSpots = async () => {
    const savedHotSpots = await MyAsyncStorage.get("saved");

    setSaved(savedHotSpots);

    console.log("async storage theme =", theme);

    console.log("current theme from async storage =", theme);
  };

  useEffect(() => {
    getSavedHotSpots();
  }, []);

  return (
    <View>
      <MyHeading>Current Theme: </MyHeading>
      <MyText style={{ textAlign: "center", width: 100 }}>{theme}</MyText>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode() ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkMode()}
      />
      <Button title="Terug" onPress={() => navigation.goBack()} />

      {/*Geef lokaal opgeslagen info weer*/}
      <View>
        <MyTitle>My Saved Hotspots</MyTitle>
        <FlatList
          data={saved}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <MyText>{item.title}</MyText>}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;
