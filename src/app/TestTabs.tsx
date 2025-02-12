import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import FirstRoute from './FirstRoute'
import SecondRoute from './SecondRoute'
import ThirdRoute from './ThirdRoute'
import FourthRoute from './FourthRoute'
import React from 'react'

const TestTabsNavigator = createMaterialTopTabNavigator()

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer }>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={[styles.tab, isFocused && styles.tabFocused]}
          >
            <Text style={[styles.tabText, isFocused && styles.tabTextFocused]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
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
      <TestTabsNavigator.Screen name="FirstRoute" component={FirstRoute} />
      <TestTabsNavigator.Screen name="SecondRoute" component={SecondRoute} />
      <TestTabsNavigator.Screen name="ThirdRoute" component={ThirdRoute} />
      <TestTabsNavigator.Screen name="FourthRoute" component={FourthRoute} />
    </TestTabsNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    //flexDirection: 'row',
    backgroundColor: 'yellow',
    paddingVertical: 10,    
    height: 60,
    
    //flex: 1,
    //alignItems: 'center',
  },
  tab: {
    padding: 5,
    marginHorizontal: 5,
    marginVertical:'auto',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height:40,   
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
