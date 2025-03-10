import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Seiji1 from './seiji/seiji1'
import Seiji2 from './seiji/seiji2'
import Seiji3 from './seiji/seiji3'
import Seiji4 from './seiji/seiji4'

const HomeStackNavigator = createMaterialTopTabNavigator()

const routeDisplayNameMap = {
  Seiji1Route: '社会保険と\n選挙制度の変遷',
  Seiji2Route: '年金特別会計',
  Seiji3Route: '人口推移と\n生活保護',
  Seiji4Route: '四番目の画面',
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabbar}>
    <View style={styles.tabBarContainer }>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const displayName = routeDisplayNameMap[route.name] || route.name; // 表示名を取得
            
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => 
              {
                console.log(route.name);
                navigation.navigate(route.name)}
              }
            style={[styles.tab, isFocused && styles.tabFocused]}
          >
            <Text style={[styles.tabText, isFocused && styles.tabTextFocused]}>
              {displayName}
            </Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
    </View>
    </View>
  )
}

const TestTab = () => {
  return (
    <HomeStackNavigator.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#f0f0f0' }
      }}
    >
      <HomeStackNavigator.Screen key="Seiji1Route" name="Seiji1Route" component={Seiji1}/>
      <HomeStackNavigator.Screen key="Seiji2Route" name="Seiji2Route" component={Seiji2}/>
      <HomeStackNavigator.Screen key="Seiji3Route" name="Seiji3Route" component={Seiji3}/>
      <HomeStackNavigator.Screen key="Seiji4Route" name="Seiji4Route" component={Seiji4}/>     
    </HomeStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  tabbar:{
    backgroundColor:'green',

  },
  tabBarContainer: {
    marginTop:50,
    //flexDirection: 'row',
    backgroundColor: 'yellow',
    paddingVertical: 5,    
    height: 75,
  },
  tab: {
    padding: 5,
    marginHorizontal: 5,
    marginVertical:'auto',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height:65,   
    justifyContent:'center'
  },
  tabFocused: {
    backgroundColor: 'blue',
  },
  tabText: {
    color: '#333',    
  },
  tabTextFocused: {
    color: '#fff',
  },
});

export default TestTab;
