import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HojokinHome from './memo/hojokinHome'; // HojokinHome コンポーネントをインポート
import Articles from './memo/articles'; // Articles コンポーネントをインポート
import Keisan from './memo/keisan'; // Kihonteate コンポーネントをインポート
import { AntDesign } from '@expo/vector-icons'; // AntDesign をインポート
import { Entypo } from '@expo/vector-icons'; // AntDesign をインポート
import Articles2 from './memo/articles2';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator　
    initialRouteName='Articles'
      screenOptions={{
      tabBarStyle: {
      backgroundColor: 'lightgray', // タブバーの背景色
      borderTopWidth: 1, // タブバーのボーダー
      borderTopColor: 'gray',
      height:65

    }
    // その他のタブのオプション
  }} >
    <Tab.Screen
    name="Spacer" // スペーサー用のタブ
    component={() => null} // コンポーネントは不要
    options={{
      tabBarButton: () => null, // タブバーに表示しない
    }}
  />
      
      <Tab.Screen
        name="Articles"
        component={Articles}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Keisan"
        component={Keisan}
        options={{
          tabBarLabel: '計算',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calculator" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default MyTabs;