import React from "react";
import {  StyleSheet, TextInput, TouchableHighlight, View } from "react-native";
import ActivityIndicatorPart from "./ActivityIndicator";
import Buttons from "./Buttons";
import FlatListBasics from "./FlatListBasics";
import Images from "./Images";
import KeyboardAvoidingViews from "./KeyboardAvoidingViews";
import Modals from "./Modals";
import PizzaTranslator from "./PizzaTranslator";
import PullToRefresh from "./PullToRefresh";
import ScrollViewPart from "./ScrollViewPage";
import SectionListBasics from "./SectionListBasics";
import StatusBarPart from "./StatusBarPart";
import Switches from "./Switches";
import TextInputs from "./TextInputs";
import Texts from "./Texts";
import TouchableHighlightExample from "./TouchableHightLights";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PizzaTranslator /> */}

    {/* BuiltInComponents */}

    {/* <ActivityIndicatorPart /> */}
    {/* <Buttons /> */}
    {/* <FlatListBasics /> */}
    {/* <Images/> */}
    {/* <KeyboardAvoidingViews /> */}
    {/* <Modals/> */}
    {/* <PullToRefresh /> */}
    {/* <ScrollViewPart /> */}

      {/* <SectionListBasics /> */}
      {/* <StatusBarPart /> */}
      {/* <Switches/> */}
      {/* <Texts/> */}
      {/* <TextInputs/> */}
      <TouchableHighlightExample />
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
