import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyTitle(
  props: PropsWithChildren<{
    className?: string;
  }>
) {
  const { theme, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];

  return (
    <Text
      className={"text-xl font-extrabold " + props.className}
      style={{ color: activeColors.tint }}
    >
      {props.children}
    </Text>
  );
}

export default MyTitle;
