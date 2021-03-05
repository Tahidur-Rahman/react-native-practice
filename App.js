import React from "react";
import { StyleSheet, View } from "react-native";
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
      <SectionListBasics />
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
