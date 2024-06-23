import React from "react";
import { StatusBar } from "expo-status-bar";

import { View, SafeAreaView, StyleSheet } from "react-native";
import { Bar, HomeScreenProps } from "../types/types";
import MyText from "../components/typography/MyText";
import { useThemeContext } from "../context/ThemeContext";
import MyTitle from "../components/typography/MyTitle";
import MyHeading from "../components/typography/MyHeading";
import LogoTitle from "../components/logo/LogoTitle";
import MyButton from "../components/buttons/MyButton";

function HomeScreen({ navigation }: HomeScreenProps) {
  const { theme, colors } = useThemeContext();
  let activeColors = colors[theme as "dark" | "light"];

  const styles = StyleSheet.create({
    safearea: {
      flex: 1,
      justifyContent: "center",
    },
    container: {
      flex: 1,
      margin: 20,
      backgroundColor: activeColors.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: activeColors.tint,
      paddingVertical: 10,
    },
  });
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <MyTitle>
          <LogoTitle /> BarExplorer
        </MyTitle>
        <MyHeading>Welkom bij BarExplorer!</MyHeading>
        <MyText style={styles.text}>
          Ontdek de beste cafés in jouw buurt met onze handige app. Of je nu op
          zoek bent naar een gezellige kroeg voor een avondje uit met vrienden,
          een sfeervolle bar om nieuwe mensen te ontmoeten, BarExplorer helpt je
          de perfecte locatie te vinden.
        </MyText>
        <MyText style={styles.text}>
          Duik in het bruisende nachtleven, verken de lokale hotspots en laat je
          verrassen door wat jouw stad te bieden heeft. Met BarExplorer zit je
          altijd goed! Veel plezier en proost! 🍻 Team BarExplorer
        </MyText>

        <MyButton
          title="Ontdek cafés!"
          onPress={() => navigation.navigate("BarsList")}
        ></MyButton>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default HomeScreen;
