import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyTitle(props: PropsWithChildren<{}>) {
  const { color } = useThemeContext();
  return (
    <Text className={`text-xl font-extrabold ${color}`}>{props.children}</Text>
  );
}

export default MyTitle;
