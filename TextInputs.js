import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function TextInputs() {
  return (
    <View style={styles.container}>
      <TextInput
        autoCompleteType={"email"}
        placeholder="Email"
        style={styles.input}
        keyboardType={'email-address'}
      />
      <TextInput
        autoCompleteType={'tel'}
        placeholder="Tel"
        style={styles.input}
        keyboardType={'decimal-pad'}
      />
      <TextInput
        autoCompleteType={"password"}
        placeholder="Password"
        style={styles.input}
        textContentType="password"
        borderBottomColor="red"
      />
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flex:1,
    justifyContent:'space-around',
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 40,
    width: 200
  },
});
export default TextInputs;
