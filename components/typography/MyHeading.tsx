import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyHeading(props: PropsWithChildren<{}>) {
  const { theme, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];

  return (
    <Text
      className="text-lg font-bold "
      style={{
        color: activeColors.tint,
      }}
    >
      {props.children}
    </Text>
  );
}

export default MyHeading;
