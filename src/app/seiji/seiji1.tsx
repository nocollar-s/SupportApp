import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Seiji1 = () => {
  console.log('Seiji1 rendered'); // コンソールログを追加
  return (
    <View style={[styles.scene, { backgroundColor: 'lightblue' }]}>
      <Text>Seiji1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    marginTop:10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Seiji1);

