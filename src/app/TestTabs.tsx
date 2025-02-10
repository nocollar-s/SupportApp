
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';
import ThirdRoute from './ThirdRoute';
import FourthRoute from './FourthRoute';
import { useNavigationState } from '@react-navigation/native';
import React from 'react';

const TestTabsNavigator = createMaterialTopTabNavigator();

const TestTabs = () => {
  const navigationState = useNavigationState(state => state);
  const [index, setIndex] = React.useState(0); // setIndex を定義

  const renderTabBar = () => {
    if (!navigationState || !navigationState.routes) {
      return null;
    }
    return (
      <View style={styles.tabBarContainer}>
        {navigationState.routes.map((route, index) => {
          const focused = index === navigationState.index;
          const tabWidth = getTabWidth(route.name);
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => {
                if (navigationState && navigationState.routes) {
                  const newIndex = navigationState.routes.findIndex(r => r.key === route.key);
                  setIndex(newIndex);
                }
              }}
              style={[
                styles.tab,
                { width: tabWidth },
                focused ? styles.tabFocused : null,
              ]}
            >
              <Text style={focused ? styles.tabTextFocused : styles.tabText}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const getTabWidth = (tabName) => {
    switch (tabName) {
      case 'FirstRoute':
        return 150;
      case 'SecondRoute':
        return 100;
      case 'ThirdRoute':
        return 200;
      case 'FourthRoute':
        return 120;
      default:
        return 100;
    }
  };

  return (
    <TestTabsNavigator.Navigator
      tabBar={renderTabBar}
      initialLayout={{ width: Dimensions.get('window').width }}
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
      })}
    >
      <TestTabsNavigator.Screen name="FirstRoute" component={FirstRoute} />
      <TestTabsNavigator.Screen name="SecondRoute" component={SecondRoute} />
      <TestTabsNavigator.Screen name="ThirdRoute" component={ThirdRoute} />
      <TestTabsNavigator.Screen name="FourthRoute" component={FourthRoute} />
    </TestTabsNavigator.Navigator>
  );
};


const styles = StyleSheet.create({
  tabBarContainer: { // タブバー全体のスタイル
    flexDirection: 'row', // 横方向に並べる
    backgroundColor: '#f0f0f0', // 背景色
    padding: 10, // パディング
  },
  tab: { // 各タブのスタイル
    alignItems: 'center', // 中央揃え
    justifyContent: 'center', // 中央揃え
    padding: 10, // パディング
    borderWidth: 1, // 枠線
    borderColor: '#ccc', // 枠線色
    borderRadius: 5, // 角丸
    marginRight: 5, // 右マージン
  },
  tabFocused: { // 選択中のタブのスタイル
    backgroundColor: '#e91e63', // 背景色
  },
  tabText: { // タブのテキストスタイル
    color: '#333', // 文字色
  },
  tabTextFocused: { // 選択中のタブのテキストスタイル
    color: '#fff', // 文字色
  },
});

export default TestTabs;