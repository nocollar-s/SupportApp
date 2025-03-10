import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import First from './test/First'
import Second from './test/Second'
import Third from './test/Third'
import Fourth from './test/Fourth'
import React from 'react'

const TestTabsNavigator = createMaterialTopTabNavigator()

const routeDisplayNameMap = {
  FirstRoute: '社会保険と\n選挙制度の変遷',
  SecondRoute: '年金特別会計',
  ThirdRoute: '人口推移と\n生活保護',
  FourthRoute: '四番目の画面',
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
            onPress={() => navigation.navigate(route.name)}
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

const TestTabs = () => {
  return (
    <TestTabsNavigator.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#f0f0f0' }
      }}
    >
      <TestTabsNavigator.Screen name="FirstRoute" component={First} />
      <TestTabsNavigator.Screen name="SecondRoute" component={Second} />
      <TestTabsNavigator.Screen name="ThirdRoute" component={Third} />
      <TestTabsNavigator.Screen name="FourthRoute" component={Fourth} />     
    </TestTabsNavigator.Navigator>
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

export default TestTabs;