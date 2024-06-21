import React from "react";
import { View, Text } from "react-native";

function MyTitle(props: { children?: string }) {
  return <Text className="text-lg font-bold">{props.children}</Text>;
}

export default MyTitle;
