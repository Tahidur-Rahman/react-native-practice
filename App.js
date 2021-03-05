import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <PizzaTranslator />
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

function PizzaTranslator() {
  const [text, setText] = useState('some text');
  return (
    <>
      <TextInput placeholder="Type here to translate"
                onChangeText={text=>setText(text)}
                style={{height:40,color:'red',border:'blue'}}
                />
      <Text style={{backgroundColor:'#eee',border:'2px solid #000'}}>{text.split(' ').map(word => word && "🍕")}</Text>
    </>
  );
}
