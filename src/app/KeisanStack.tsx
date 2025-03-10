import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import CustomHeader from './CustomHeader'
import Keisan1 from './keisan/keisan1'
import Keisan2 from './keisan/keisan2'

const Stack = createStackNavigator()

const KeisanStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <CustomHeader navigation={navigation} route={route} options={options} back={back} />
        ),
        gestureEnabled: true, // スワイプでの戻る操作を有効にする
      }}>
        <Stack.Screen name="Keisan1" component={Keisan1} 
        options={{title: '補助金計算サポート', header: CustomHeader}} />
        <Stack.Screen name="Keisan2" component={Keisan2} 
        options={{title: '補助金計算サポート', header: CustomHeader}} />
        
        {/* 他の Stack Screen */}
      </Stack.Navigator>
    )
  }
  
  export default KeisanStack
  