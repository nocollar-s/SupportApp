import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

const Articles1 = () => {
  return (
    <ScrollView style={styles.scene}>
      <View style={styles.space}>
      <Text>Articles1</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  space:{
    paddingTop:50,
    marginTop:100,
  }

});

export default Articles1;
