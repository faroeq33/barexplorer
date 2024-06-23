import { Button, ButtonProps } from "react-native";
import { useThemeContext } from "../../context/ThemeContext";

function MyButton(props: ButtonProps) {
  const { theme, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];

  return <Button {...props} color={activeColors.accent} />;
}

export default MyButton;
