import { View, Text } from "react-native";
import { DetailScreenProps } from "../navigation/types";
import MyButton from "../components/buttons/MyButton";
import MyTitle from "../components/typography/MyTitle";

function DetailsScreen({ navigation }: DetailScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyTitle>Details Screen</MyTitle>
      <MyButton
        title="Go to detail again"
        onPress={() => navigation.push("Detail")}
      ></MyButton>
      <MyButton
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <MyButton title="Terug" onPress={() => navigation.goBack()} />
      <MyButton
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      ></MyButton>
    </View>
  );
}
export default DetailsScreen;
