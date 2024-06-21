import { Button } from "react-native";
import { SettingsScreenProps } from "../navigation/types";
import MyTitle from "../components/typography/MyTitle";
import Container from "../components/misc/Container";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import { useColorScheme } from "nativewind";

function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Container>
      <MyTitle>Details Screen</MyTitle>

      <Button onPress={toggleTheme} title="Toggle Theme" />
      <MyText>Current Theme: {theme}</MyText>
      <Button title="Terug" onPress={() => navigation.goBack()} />
    </Container>
  );
}
export default SettingsScreen;
