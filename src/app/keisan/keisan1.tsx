import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Keisan1 = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Keisan1</Text>
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

export default Keisan1;
