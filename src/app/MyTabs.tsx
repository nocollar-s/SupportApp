import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HojokinHome from './memo/hojokinHome'; // HojokinHome コンポーネントをインポート
import Articles from './memo/articles'; // Articles コンポーネントをインポート
import Kihonteate from './memo/kihonteate'; // Kihonteate コンポーネントをインポート
import { AntDesign } from '@expo/vector-icons'; // AntDesign をインポート
import Kihonteate2 from './memo/kihonteate2'; // Kihonteate2 をインポート

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator　
      screenOptions={{
      tabBarStyle: {
      backgroundColor: 'lightgray', // タブバーの背景色
      borderTopWidth: 1, // タブバーのボーダー
      borderTopColor: 'gray',
    }
    // その他のタブのオプション
  }} >
      <Tab.Screen
        name="HojokinHome"
        component={HojokinHome}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Articles"
        component={Articles}
        options={{
          tabBarLabel: '一覧',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kihonteate"
        component={Kihonteate}
        options={{
          tabBarLabel: '計算',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calculator" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default MyTabs;