import React from "react";
import { Image } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

type Props = {
  children?: React.ReactNode;
};

function LogoTitle(props: Props) {
  const { getTheme } = useThemeContext();

  const getImage =
    getTheme() === "dark"
      ? require("./logo@dark.png")
      : require("./logo@light.png");

  return (
    <>
      <Image source={getImage} style={{ width: 25, height: 25 }} />
    </>
  );
}
export default LogoTitle;
