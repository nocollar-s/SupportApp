import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Articles1 = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Articles1</Text>
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

export default Articles1;
