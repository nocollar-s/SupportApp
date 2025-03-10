

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Fourth = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Fourth Content</Text>
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

export default Fourth;
