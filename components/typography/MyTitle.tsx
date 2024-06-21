import React, { PropsWithChildren } from "react";
import { Text } from "react-native";

function MyTitle(props: PropsWithChildren<{}>) {
  return (
    <Text className="text-xl font-extrabold text-slate-800 dark:text-slate-200">
      {props.children}
    </Text>
  );
}

export default MyTitle;
