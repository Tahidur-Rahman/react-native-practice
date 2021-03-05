import React from "react";
import { StyleSheet, View } from "react-native";
import FlatListBasics from "./FlatListBasics";
import PizzaTranslator from "./PizzaTranslator";
import ScrollViewPart from "./ScrollViewPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PizzaTranslator /> */}
      {/* <ScrollViewPart /> */}

      <FlatListBasics />
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
