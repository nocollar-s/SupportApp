import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs'; // MyTabs コンポーネントをインポート
import Articles2 from './memo/articles2';
import Keisan10 from './memo/keisan10';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        {/* 必要であれば、他の Stack.Screen を追加 */}

        <Stack.Screen name="Articles2" component={Articles2} />
      <Stack.Screen name="Keisan10" component={Keisan10} />  
      </Stack.Navigator>
      
    </NavigationIndependentTree>
  );
};

export default App;