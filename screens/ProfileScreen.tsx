import { NavigationProp } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

type Props = {
  navigation: NavigationProp;
};

function ProfileScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to detail again"
        onPress={() => navigation.push("Detail")}
      ></Button>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Terug" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      ></Button>
    </View>
  );
}

export default ProfileScreen;
