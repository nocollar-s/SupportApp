import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Seiji2 = () => {
  console.log('Seiji1 rendered'); // コンソールログを追加
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Seiji2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Seiji2;
