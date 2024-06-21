import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyHeading(props: PropsWithChildren<{}>) {
  const { color } = useThemeContext();
  return <Text className={`text-lg font-bold ${color}`}>{props.children}</Text>;
}

export default MyHeading;
