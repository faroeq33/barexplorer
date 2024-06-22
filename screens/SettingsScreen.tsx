import { Switch, View } from "react-native";
import { SettingsScreenProps } from "../types/types";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import MyHeading from "../components/typography/MyHeading";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { theme, toggleTheme, isDarkMode, colors } = useThemeContext();
  const screenTheme = { mode: theme };

  return (
    <View
      style={{
        height: "100%",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "80%", paddingTop: 10 }}>
        <View className="flex-row items-center ">
          <MyHeading>Current Theme: </MyHeading>
          <MyText
            // style={{ textAlign: "center", width: "100%" }}
            className="text-xl"
          >
            {screenTheme.mode}
          </MyText>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode() ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode()}
        />
        <View className="flex-row items-center">
          {/* <Button title="Terug" onPress={() => navigation.goBack()} /> */}
        </View>
      </View>
    </View>
  );
}

export default SettingsScreen;
