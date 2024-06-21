import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { useThemeContext } from "./ThemeContext";

function MyNavigationContainer(props: PropsWithChildren<{}>) {
  const { getTheme } = useThemeContext();
  const theme = getTheme() === "dark" ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>{props.children}</NavigationContainer>
  );
}

const CustomStyles = {
  headerStyle: {
    backgroundColor: "rgba(0, 130, 25, .7)",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
export default MyNavigationContainer;
