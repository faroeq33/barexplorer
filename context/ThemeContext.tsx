import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import MyAsyncStorage from "../utils/MyAsyncStorage";
import { useColorScheme } from "react-native";

type ContextType = {
  theme: string;
  getTheme: () => string;
  // setTheme: (theme: string) => void;
  toggleTheme: () => void;
  color: string;
  isDarkMode: () => boolean;
};

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = (props: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ContextType["theme"]>("light");

  const getTheme = () => {
    return theme;
  };

  const isDarkMode = () => {
    return theme === "dark";
  };

  const toggleTheme = () => {
    const toggleThemeString = getTheme() === "dark" ? "light" : "dark";

    // Save to async storage,
    MyAsyncStorage.save("theme", toggleThemeString).then(() => {
      console.log("state...theme", theme);
      console.log("getter..theme", getTheme());
      console.log("toggled.theme", toggleThemeString);

      setTheme(toggleThemeString);
    });
  };

  const appearance = useColorScheme();
  console.log("user preferrance from device =", appearance);

  const setAppTheme = useCallback(async () => {
    const IS_FIRST = await MyAsyncStorage.get("IS_FIRST");
    if (IS_FIRST === null) {
      MyAsyncStorage.save("theme", appearance);
      MyAsyncStorage.save("IS_FIRST", true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  const getThemeFromStorage = async () => {
    const theme = await MyAsyncStorage.get("theme");
    console.log("async storage theme =", theme);

    console.log("current theme from async storage =", theme);

    if (theme) {
      setTheme(theme);
    }
  };

  useEffect(() => {
    // if theme is not set, get it from storage
    getThemeFromStorage();
  }, []);

  const color = theme === "dark" ? "text-slate-200" : "text-slate-800";

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, getTheme, color, isDarkMode }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }

  return context;
};
