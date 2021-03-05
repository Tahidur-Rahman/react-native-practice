import React from "react";
import { FlatList, View, Text,StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 44,
  },
});

function FlatListBasics() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Habib" },
          { key: "Aziz" },
          { key: "Tahid" },
          { key: "Sohid" },
          { key: "Karim" },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;
