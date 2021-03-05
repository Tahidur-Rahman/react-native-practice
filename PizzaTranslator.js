import React, { useState } from "react";
import { Text, TextInput } from "react-native";

function PizzaTranslator() {
  const [text, setText] = useState("some text");
  return (
    <>
      <TextInput
        placeholder="Type here to translate"
        onChangeText={(text) => setText(text)}
        style={{ height: 40, color: "red", border: "blue" }}
      />
      <Text style={{ backgroundColor: "#eee", border: "2px solid #000" }}>
        {text.split(" ").map((word) => word && "🍕")}
      </Text>
    </>
  );
}

export default PizzaTranslator;
