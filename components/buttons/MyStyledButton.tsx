import {
  Pressable,
  PressableProps,
  TouchableHighlight,
  View,
} from "react-native";
import { useThemeContext } from "../../context/ThemeContext";
import MyText from "../typography/MyText";

function MyStyledButton(props: PressableProps & { title?: string }) {
  const { theme, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];

  return (
    <Pressable
      style={{
        marginTop: 10,
        padding: 10,
        backgroundColor: activeColors.tertiary,
        borderRadius: 3,
      }}
      {...props}
    >
      {props.title || props.children}
    </Pressable>
  );
}

export default MyStyledButton;
