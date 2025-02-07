import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, Alert,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const Articles2 = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.dispatch(
        CommonActions.navigate({
          name: 'Keisan10'
        })
      );
    }}>
              <Text>傷病手当金10　計算ページ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Keisan20')}>
              <Text>求職手当20　計算ページ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Keisan30')}>
              <Text>その他30　計算ページ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',

  },
  title:{
    fontSize: 20,
    paddingBottom: 15
    
  }
});

export default Articles2;
