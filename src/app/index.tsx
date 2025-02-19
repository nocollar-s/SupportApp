import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MyTabs from './TestTabs'; // MyTabs コンポーネントをインポート
import Articles2 from './memo/articles2';
import Keisan10 from './memo/keisan10';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationIndependentTree style={styles.container}>
      
      {/* <StatusBar backgroundColor='green'> */}
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        {/* 必要であれば、他の Stack.Screen を追加 */}

        <Stack.Screen name="Articles2" component={Articles2} />
      <Stack.Screen name="Keisan10" component={Keisan10} />  
      </Stack.Navigator>
      {/* </StatusBar> */}
    </NavigationIndependentTree>
)};

const styles = StyleSheet.create({
  container: {
    headerTintColor: 'green',
  } 
})

export default Index;