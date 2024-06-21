import { View, Button } from "react-native";
import { SettingsScreenProps } from "../navigation/types";
import MyTitle from "../components/typography/MyTitle";
import { useTheme } from "@react-navigation/native";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyTitle>Details Screen</MyTitle>

      <Button
        title="Go to detail again"
        onPress={() => navigation.push("Detail")}
      ></Button>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Terug" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      ></Button>
    </View>
  );
}
export default SettingsScreen;
