import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import axios from 'axios'
import { CommonActions } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import FirstRoute from './FirstRoute'
import SecondRoute from './SecondRoute'
import ThirdRoute from './ThirdRoute'
import FourthRoute from './FourthRoute'
import TestTabs from './TestTabs'



const Stack = createStackNavigator()

const KeisanStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <TestTabs navigation={navigation} route={route} options={options} back={back} />
        ),
        gestureEnabled: true, // スワイプでの戻る操作を有効にする
      }}>
            <Stack.Screen name="CategoryListScreen" component={ThirdRoute} 
        options={{title: '補助金サポート', header: TestTabs}} />
      </Stack.Navigator>
    )
  }
  
  export default KeisanStack
