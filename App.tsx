import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamList } from "./types/types";

import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

import LogoTitle from "./components/logo/LogoTitle";
import { ThemeProvider } from "./context/ThemeContext";
import MyNavigationContainer from "./context/MyNavigationContainer";
import BarsListScreen from "./screens/BarsListScreen";
import MyButton from "./components/buttons/MyButton";

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
                <MyButton
                  title="Settings"
                  onPress={() => navigation.navigate("Settings")}
                />
              ),
            })}
          />
          <Stack.Screen name="BarsList" component={BarsListScreen} />
          <Stack.Screen name="Detail" component={DetailsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </MyNavigationContainer>
    </ThemeProvider>
  );
}

export default App;
