import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HojokinHome from './memo/hojokinHome'; // HojokinHome コンポーネントをインポート
import Articles from './memo/articles'; // Articles コンポーネントをインポート
import Keisan from './memo/keisan'; // Kihonteate コンポーネントをインポート
import { AntDesign } from '@expo/vector-icons'; // AntDesign をインポート
import { Entypo } from '@expo/vector-icons'; // AntDesign をインポート
import Articles2 from './memo/articles2';

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Stack.Navigator>

    
  

    
      <Stack.Screen
        name="Articles2"  component={ Articles2 } />    
        
    
      <Stack.Screen
        name="Keisan" component={Keisan} />
          
        
      
      
    </Stack.Navigator>
  );
};

export default MyTabs;