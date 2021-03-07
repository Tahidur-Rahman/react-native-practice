import React, { useState, useCallback } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function PullToRefresh() {
  const [refreshing, setrefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setrefreshing(true);
    wait(2000).then(() => setrefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#fff','green','#fdfdfd']} 
          progressBackgroundColor="#343434"
          title="Refreshing" 
          titleColor="black"/>
        }
      >
        <Text>Pull down to RefreshControl Indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PullToRefresh;
