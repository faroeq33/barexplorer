import { useColorScheme } from "nativewind";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = {
  theme: string;
  getTheme: () => string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = (props: PropsWithChildren<{}>) => {
  // Hoe past localstorage hierin, daar sla ik ook voorkeuren op
  const getDefaultValue = (): string => {
    // localStorage.getItem("theme") ||
    // voeg default theme toe vanuit appearance
    // anders default naar light
    return "";
  };

  const [theme, setTheme] = useState<ContextType["theme"]>(getDefaultValue());
  const { toggleColorScheme } = useColorScheme();

  const toggleTheme = () => {
    toggleColorScheme();
    setTheme(theme === "light" ? "dark" : theme);
  };

  const getTheme = () => {
    // Replace with localStorage or AsyncStorage
    const localStorageTheme = "dark";

    if (localStorageTheme) {
      return localStorageTheme;
    }

    return theme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, getTheme }}>
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
