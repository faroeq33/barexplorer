const colorsTheme1: Theme = {
  dark: {
    primary: "#1E1E1E", // Dark Gray
    secondary: "#373737", // Medium Gray
    tertiary: "#575757", // Light Gray
    accent: "#FFD700", // Gold
    tint: "#FFFFFF", // White
  },
  light: {
    primary: "#FFFFFF", // White
    secondary: "#E0E0E0", // Light Gray
    tertiary: "#C0C0C0", // Medium Gray
    accent: "#FFD700", // Gold
    tint: "#000000", // Black
  },
};
// theme 2
const colorsTheme2: Theme = {
  dark: {
    primary: "#121212", // Dark Charcoal
    secondary: "#2C2C2C", // Charcoal
    tertiary: "#424242", // Dim Gray
    accent: "#FF6347", // Tomato
    tint: "#B0E0E6", // Powder Blue
  },
  light: {
    primary: "#F5F5F5", // White Smoke
    secondary: "#CCCCCC", // Silver
    tertiary: "#A9A9A9", // Dark Gray
    accent: "#FF6347", // Tomato
    tint: "#4682B4", // Steel Blue
  },
};

const colorsTheme3: Theme = {
  dark: {
    primary: "#0D0D0D", // Jet Black
    secondary: "#262626", // Very Dark Gray
    tertiary: "#404040", // Dark Gray
    accent: "#32CD32", // Lime Green
    tint: "#ADFF2F", // Green Yellow
  },
  light: {
    primary: "#FAFAFA", // Snow
    secondary: "#E8E8E8", // Light Gray
    tertiary: "#BEBEBE", // Gray
    accent: "#32CD32", // Lime Green
    tint: "#006400", // Dark Green
  },
};

const colorsTheme4: Theme = {
  dark: {
    primary: "#202020", // Eerie Black
    secondary: "#3C3C3C", // Gray
    tertiary: "#585858", // Light Gray
    accent: "#FF4500", // Orange Red
    tint: "#FFDAB9", // Peach Puff
  },
  light: {
    primary: "#F0F0F0", // Cultured
    secondary: "#D3D3D3", // Light Gray
    tertiary: "#A9A9A9", // Dark Gray
    accent: "#FF4500", // Orange Red
    tint: "#8B0000", // Dark Red
  },
};

export const Themes = {
  theme1: colorsTheme1,
  theme2: colorsTheme2,
  theme3: colorsTheme3,
  theme4: colorsTheme4,
};

export interface Theme {
  dark: Variant;
  light: Variant;
}

export interface Variant {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  tint: string;
}
