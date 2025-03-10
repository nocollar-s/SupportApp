import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Articles2 = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Articles</Text>
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

export default Articles2;
