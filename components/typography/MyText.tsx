import React from "react";
import { Text, TextProps } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyText(props: TextProps) {
  const { getTheme, color } = useThemeContext();
  return (
    <Text
      className={`${color}`}
      // style={{
      //   color: getTheme() === "dark" ? styles.text.dark : styles.text.light,
      // }}
    >
      {props.children}
    </Text>
  );
}

const styles = {
  text: {
    dark: "white",
    light: "black",
  },
};
export default MyText;
