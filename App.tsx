import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamList } from "./navigation/types";

import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

import LogoTitle from "./components/logo/LogoTitle";
import { Button } from "react-native";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext";
import MyNavigationContainer from "./context/MyNavigationContainer";

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
                <Button
                  onPress={() => navigation.navigate("Settings")}
                  title="Settings"
                />
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
