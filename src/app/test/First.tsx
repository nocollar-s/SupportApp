import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
//import ZoomableView from 'react-native-zoomable-view';

const image1 = require('../../../assets/一般会計予算.png')

const First = () => {
  return (
    <ScrollView>
      <View style={styles.space}>

      <Image source={image1} />
      <Text>First Content</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  space: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightgray',
  },
});

export default First;
