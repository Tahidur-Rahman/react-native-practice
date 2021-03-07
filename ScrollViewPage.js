import React from "react";
import { ScrollView, Text,StyleSheet,SafeAreaView,StatusBar } from "react-native";



function ScrollViewPart() {
  console.log(StatusBar);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}
      bounces={true}>
        <Text style={styles.text}>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum corrupti molestiae quo dolorum tenetur dolore. Magni, nisi! Doloremque, consectetur saepe, ipsa odit id nihil, in fugit nobis corporis assumenda quia facilis reiciendis quibusdam aspernatur aut. Consectetur sequi laudantium distinctio fugiat inventore, voluptates quod facere maiores officia, illo aliquam autem aliquid molestias libero beatae doloremque nemo amet numquam at voluptatem. Maiores, odit modi blanditiis cum accusantium sed placeat beatae velit eos at vitae omnis corrupti, commodi illo praesentium libero molestiae dolores et quisquam vero. Sapiente laborum excepturi nostrum deserunt nam nemo porro illum labore? Suscipit soluta quae nesciunt blanditiis eaque?
        </Text>
      </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
  },
  scrollView:{
    backgroundColor:'pink',
    marginHorizontal:20,
    padding:10,
  },text:{
    fontSize:32,
    textAlign:'justify',
  }
})

export default ScrollViewPart;
