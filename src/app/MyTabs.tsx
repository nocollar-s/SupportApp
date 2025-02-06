import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HojokinHome from './memo/hojokinHome'; // HojokinHome コンポーネントをインポート
// 他のコンポーネントも必要であればインポート
import { AntDesign } from '@expo/vector-icons'; // AntDesign をインポート

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HojokinHome" // タブの名前
        component={HojokinHome} // 対応するコンポーネント
        options={{
          tabBarLabel: 'ホーム', // タブに表示するラベル
          tabBarIcon: ({ color, size }) => ( // タブのアイコン (必要であれば)
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      {/* 他のタブも同様に追加 */}
    </Tab.Navigator>
  );
};

export default MyTabs;