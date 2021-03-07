import React from "react";
import { ImageBackground, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRightColor: "#000",
    borderLeftWidth: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 600,
  },
  largeImage: {
    width: 300,
    height: 200,
    padding: 3,
  },
  logoImage: {
    width: 100,
    height: 60,
    resizeMode: "stretch",
  },
  bgImage: {
    resizeMode: "cover",
    flex: 1,
    width:100
  },
});

function Images() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://images.freeimages.com/images/large-previews/21f/jersey-fabric-dark-grey-1632680.jpg",
        }}
        style={styles.bgImage}
      >
        <Image
          style={styles.largeImage}
          source={{
            uri:
              "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg",
          }}
          blurRadius={0}
          fadeDuration={1111}
        />
        <Image
          style={styles.logoImage}
          source={{
            uri: "https://www.logodesign.net/images/nature-logo.png",
          }}
        />
      </ImageBackground>
    </View>
  );
}

export default Images;
