import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Seiji1 from './seiji/seiji1';
import Seiji2 from './seiji/seiji2';
import Seiji3 from './seiji/seiji3';
import Seiji4 from './seiji/seiji4';
import TopTabBar from './TopTabBar';

const HomeStackNavigator = createMaterialTopTabNavigator();

const TestTab = () => {
  return (
    <HomeStackNavigator.Navigator
      tabBar={(props) => <TopTabBar {...props} />}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#f0f0f0' },
      }}
    >
      <HomeStackNavigator.Screen key="Seiji1Route" name="Seiji1Route" component={Seiji1} />
      <HomeStackNavigator.Screen key="Seiji2Route" name="Seiji2Route" component={Seiji2} />
      <HomeStackNavigator.Screen key="Seiji3Route" name="Seiji3Route" component={Seiji3} />
      <HomeStackNavigator.Screen key="Seiji4Route" name="Seiji4Route" component={Seiji4} />
    </HomeStackNavigator.Navigator>
  );
};

export default TestTab;
