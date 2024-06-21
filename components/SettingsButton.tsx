import { Button } from "react-native";
import { SettingsScreenProps } from "../navigation/types";

function SettingsButton({ navigation }: SettingsScreenProps) {
  return (
    <Button
      onPress={() => navigation.navigate("Settings")}
      title="Settings"
      color="#fff"
    />
  );
}

export default SettingsButton;
