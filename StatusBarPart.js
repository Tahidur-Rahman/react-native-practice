import { setStatusBarHidden, setStatusBarStyle } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, SafeAreaView, StatusBar, View,StyleSheet,Text,Button } from "react-native";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

function StatusBarPart() {
  const [hidden, sethidden] = useState(false),
    [statusBarStyle, setstatusBarStyle] = useState(STYLES[0]),
    [statusBarTransition, setstatusBarTransition] = useState(TRANSITIONS[0]),
    changeStatusBarVisibility = () => sethidden(!hidden),
    changeStatusBarStyle = () => {
      const styleId = STYLES.indexOf(statusBarStyle) + 1;
      styleId === STYLES.length
        ? setStatusBarStyle(STYLES[0])
        : setStatusBarStyle(STYLES[styleId]);
    },
    changeStatusBarTransition = () => {
      const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
      transition === TRANSITIONS.length
        ? setstatusBarTransition(TRANSITIONS[0])
        : setstatusBarTransition(TRANSITIONS[transition]);
    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text style={styles.textStyle}>
        Statusbar Visibility :{"\n"}
        {hidden ? "Hidden" : "Visible"}
      </Text>
      <Text style={styles.textStyle}>
        Statusbar Style :{"\n"}
        {statusBarStyle}
      </Text>
      {Platform.OS === "ios" ? (
        <Text style={styles.textStyle}>
          StatusBar Transition : {"\n"}
          {statusBarTransition}
        </Text>
      ) : null}

      <View style={styles.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />

        <Button title="Change StatusBar style" onPress={changeStatusBarStyle} />

        {Platform.OS === "ios" ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ECF0F1'
    },
    buttonsContainer: {
      padding: 10
    },
    textStyle: {
      textAlign: 'center',
      marginBottom: 8
    }
  });
export default StatusBarPart;
