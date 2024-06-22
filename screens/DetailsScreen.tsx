import { View } from "react-native";
import { Bar, DetailScreenProps } from "../types/types";
import MyTitle from "../components/typography/MyTitle";
import MyText from "../components/typography/MyText";
import MyHeading from "../components/typography/MyHeading";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import MyButton from "../components/buttons/MyButton";
import { MyMapView } from "../components/map/MyMapView";

function DetailsScreen({ route }: DetailScreenProps) {
  const [isMap, setisMap] = useState<boolean>(false);

  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyTitle>{isMap ? item.title : ""}</MyTitle>

      {isMap ? <MyMapView data={[item]} /> : <DetailItem item={item} />}

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
      <MyButton
        title="Toggle View"
        onPress={() => {
          setisMap((isMap) => !isMap);
        }}
      />
    </View>
  );
}

function DetailItem(props: { item: Bar }) {
  return (
    <View>
      <MyHeading>{props.item.title}</MyHeading>
      <MyText>{props.item.description}</MyText>

      {/*Nog favorieten implementern */}
    </View>
  );
}

export default DetailsScreen;
