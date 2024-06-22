import { Button, Switch, View } from "react-native";
import { SettingsScreenProps } from "../types/types";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import MyHeading from "../components/typography/MyHeading";
import { Themes } from "../config/Theme";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { toggleTheme, isDarkMode, colors } = useThemeContext();
  const theme = { mode: "dark" };

  let activeColors = colors[theme.mode as "dark" | "light"];

  return (
    <View>
      <MyHeading>Current Theme: </MyHeading>
      <MyText style={{ textAlign: "center", width: 100 }}>{theme.mode}</MyText>
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
