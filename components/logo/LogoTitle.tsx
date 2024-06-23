import React from "react";
import { Image } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

type Props = {
  children?: React.ReactNode;
  height?: number;
  width?: number;
};

function LogoTitle(props: Props) {
  const { getTheme } = useThemeContext();

  const getImage =
    getTheme() === "dark"
      ? require("./logo@dark.png")
      : require("./logo@light.png");

  const styles = {
    logo: {
      width: props.width || 25,
      height: props.height || 25,
    },
  };

  return (
    <>
      <Image source={getImage} style={styles.logo} />
    </>
  );
}
export default LogoTitle;
