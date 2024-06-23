import { StyleSheet, Switch, View } from "react-native";
import { SettingsScreenProps } from "../types/types";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import MyHeading from "../components/typography/MyHeading";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { theme, toggleTheme, isDarkMode, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];
  const screenTheme = { mode: theme };

  const styles = StyleSheet.create({
    safearea: {
      flex: 1,
      justifyContent: "center",
    },
    container: {
      flex: 1,
      margin: 20,
      backgroundColor: activeColors.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: activeColors.tint,
      paddingVertical: 10,
    },
  });
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
      }}
    >
      <View style={{ width: "80%", paddingTop: 10 }}>
        <View className="flex-row items-center ">
          <MyHeading>Current Theme: </MyHeading>
          <MyText>{screenTheme.mode}</MyText>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode() ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode()}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;
