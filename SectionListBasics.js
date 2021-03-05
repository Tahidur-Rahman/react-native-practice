import React from "react";
import { SectionList, View, Text,StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 34,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})

function SectionListBasics() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title:'Brothers',data:['Habib','Aziz',"Tohid","Sahid"]},
          {title:'Profession',data:['Banker','Banker',"Student","Student"]},
        ]}
        renderSectionHeader={({section})=> <Text style={styles.sectionHeader}>{section.title}</Text>}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item,index)=>index}
      />
    </View>
  );
}

export default SectionListBasics;
