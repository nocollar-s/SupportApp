import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstRoute = () => {
  return (
    <View style={[styles.scene, { backgroundColor: 'lightyellow' }]}>
      <Text>Item 1 First Content</Text>
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

export default FirstRoute;
