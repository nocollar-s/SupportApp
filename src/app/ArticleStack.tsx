import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import CustomHeader from './CustomHeader'
import Articles1 from './article/articles1'
import Articles2 from './article/articles2'

const Stack = createStackNavigator()

const CategoryStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        header: ({ navigation, route, options, back }) => (
          <CustomHeader navigation={navigation} route={route} options={options} back={back} />
        ),
        gestureEnabled: true, // スワイプでの戻る操作を有効にする
      }}>
        <Stack.Screen name="Articles1" component={Articles1} 
        options={{title: '補助金サポート', header: CustomHeader}} />
        <Stack.Screen name="Articles2" component={Articles2} 
        options={{title: '補助金サポート', header: CustomHeader}} />
        {/* 他の Stack Screen */}
      </Stack.Navigator>
    )
  }
  
  export default CategoryStack
  