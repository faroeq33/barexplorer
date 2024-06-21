import React from "react";
import { Image } from "react-native";

type Props = {
  children?: React.ReactNode;
};

export default function LogoTitle(props: Props) {
  return (
    <>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 25, height: 25 }}
      />
    </>
  );
}
