import { View } from "react-native";
import { Bar, DetailScreenProps } from "../types/types";
import MyTitle from "../components/typography/MyTitle";
import MyText from "../components/typography/MyText";
import MyHeading from "../components/typography/MyHeading";
import { useState } from "react";
import MyButton from "../components/buttons/MyButton";
import { MyMapView } from "../components/map/MyMapView";

function DetailsScreen({ route }: DetailScreenProps) {
  const [isMap, setisMap] = useState<boolean>(false);

  const { item } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MyTitle>{isMap ? item.title : ""}</MyTitle>

      {isMap ? <MyMapView data={[item]} /> : <DetailItem item={item} />}

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
    </View>
  );
}

export default DetailsScreen;
