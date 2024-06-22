import { View, Text, ScrollView } from "react-native";
import { Bar, DetailScreenProps } from "../types/types";
import MyButton from "../components/buttons/MyButton";
import MyTitle from "../components/typography/MyTitle";
import MyText from "../components/typography/MyText";
import MyHeading from "../components/typography/MyHeading";
import MyAsyncStorage from "../utils/MyAsyncStorage";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function DetailsScreen({ route }: DetailScreenProps) {
  const navigation = useNavigation();
  const [saved, setSaved] = useState<Bar[]>([]);
  const { item } = route.params;

  const saveHotSpot = async (item: Bar) => {
    await MyAsyncStorage.save("saved", item).then(() => {
      setSaved([...saved, item]);
      console.log("item saved", item);
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyTitle>Details Screen</MyTitle>

      <View>
        <MyHeading>{item.title}</MyHeading>
        <MyText>{item.description}</MyText>

        <MyButton title="Opslaan" onPress={() => saveHotSpot(item)} />

        {/*Nog favorieten implementern */}
      </View>

      {/* <MyButton
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
      ></MyButton> */}
    </View>
  );
}
export default DetailsScreen;
