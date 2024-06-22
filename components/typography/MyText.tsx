import React, { useEffect } from "react";
import { Text, TextProps } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyText(props: TextProps) {
  const { theme, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];

  return <Text style={{ color: activeColors.tint }}>{props.children}</Text>;
}

const styles = {
  text: {
    dark: "white",
    light: "black",
  },
};
export default MyText;
