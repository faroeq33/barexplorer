import { Button, FlatList, Switch, View } from "react-native";
import { SettingsScreenProps } from "../types/types";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import MyHeading from "../components/typography/MyHeading";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { theme, toggleTheme, isDarkMode } = useThemeContext();

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
    </View>
  );
}

export default SettingsScreen;
