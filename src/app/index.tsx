import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs'; // MyTabs コンポーネントをインポート
import Articles2 from './memo/articles2';
import Keisan10 from './memo/keisan10';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
      <Tab.Navigator>
      
        <Tab.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        {/* 必要であれば、他の Stack.Screen を追加 */}

        <Tab.Screen name="Articles2" component={Articles2} />
      <Tab.Screen name="Keisan10" component={Keisan10} />  
      </Tab.Navigator>
      
    </NavigationIndependentTree>
  );
};

export default App;