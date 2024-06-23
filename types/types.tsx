import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

export type StackParamList = {
  Home: undefined;
  Detail: { item: Bar };
  Settings: undefined;
  BarsList: undefined;
};

export type BarsListScreenProps = NativeStackScreenProps<
  StackParamList,
  "BarsList"
>;
export type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;

export type DetailScreenProps = NativeStackScreenProps<
  StackParamList,
  "Detail"
>;

export type SettingsScreenProps = NativeStackScreenProps<
  StackParamList,
  "Settings"
>;

export type Bar = {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
};
