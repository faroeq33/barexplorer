import React, { PropsWithChildren } from "react";
import { Text } from "react-native";

function MyHeading(props: PropsWithChildren<{}>) {
  return (
    <Text className="text-lg font-bold dark:text-white">{props.children}</Text>
  );
}

export default MyHeading;
