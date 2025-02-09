

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondRoute = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Item 22 Second Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondRoute;
