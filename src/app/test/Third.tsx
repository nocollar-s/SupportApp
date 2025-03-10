import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Third = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Third Content</Text>
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

export default Third;
