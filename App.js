import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World.. !</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef',
    alignItems:'center',
    justifyContent:'center'
  },
});
