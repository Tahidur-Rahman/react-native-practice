import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

const onPressTitle = () => {
  console.log("Title Pressed !");
};

function Texts() {
  const titleText = useState("Bird's Nest !");
  const bodyText = useState("This is not really a bird nest !");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Texts;
