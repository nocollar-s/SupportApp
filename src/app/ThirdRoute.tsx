

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThirdRoute = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Item 33 Second Content</Text>
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

export default ThirdRoute;
