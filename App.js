import React from "react";
import {  StyleSheet, View } from "react-native";
import ActivityIndicatorPart from "./ActivityIndicator";
import Buttons from "./Buttons";
import FlatListBasics from "./FlatListBasics";
import PizzaTranslator from "./PizzaTranslator";
import ScrollViewPart from "./ScrollViewPage";
import SectionListBasics from "./SectionListBasics";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PizzaTranslator /> */}
      {/* <ScrollViewPart /> */}
      {/* <FlatListBasics /> */}
      {/* <SectionListBasics /> */}

    {/* BuiltInComponents */}

    {/* <ActivityIndicatorPart /> */}
    <Buttons />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef",
    alignItems: "center",
    justifyContent: "center",
  },
});
