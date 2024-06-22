import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamList } from "./types/types";

import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

import LogoTitle from "./components/logo/LogoTitle";
import { ThemeProvider } from "./context/ThemeContext";
import MyNavigationContainer from "./context/MyNavigationContainer";
import MyStyledButton from "./components/buttons/MyStyledButton";
import MyText from "./components/typography/MyText";

const Stack = createNativeStackNavigator<StackParamList>();

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MyNavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <MyStyledButton onPress={() => navigation.navigate("Settings")}>
                  <MyText>Settings</MyText>
                </MyStyledButton>
              ),
            })}
          />
          <Stack.Screen name="Detail" component={DetailsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </MyNavigationContainer>
    </ThemeProvider>
  );
}

export default App;
