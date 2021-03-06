import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

function ActivityIndicatorPart() {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size="large" color="black" />
      <ActivityIndicator size="small" color="#999999" />
      <ActivityIndicator size="large" />
    </View>
  );
}

export default ActivityIndicatorPart;
