import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorSchemeName } from "react-native";

type StorageProps = {
  key: string;
  value: string | object | null | ColorSchemeName | boolean;
};

export const saveString = async (key: StorageProps["key"], value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
};

export const save = async (
  key: StorageProps["key"],
  value: StorageProps["value"]
) => saveString(key, JSON.stringify(value));

export const get = async (key: StorageProps["key"]) => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (itemString) {
      return JSON.parse(itemString);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default {
  saveString,
  save,
  get,
};
