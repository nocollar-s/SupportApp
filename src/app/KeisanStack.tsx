import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Keisan1 from '../app/keisan/keisan1'
import Keisan2 from '../app/keisan/keisan2'
import { SafeAreaView } from 'react-native-safe-area-context'


const KeisanStackNavigator = createMaterialTopTabNavigator()

const routeDisplayNameMap = {
  Keisan1Route: '社会保険と\n選挙制度の変遷',
  Keisan2Route: '社会保険222と\n選挙制度の変遷',
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView style={styles.tabbar}>
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
    </SafeAreaView>
  )
}

const KeisanStack = () => {
  return (
    <KeisanStackNavigator.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#f0f0f0' }
      }}
    >
      <KeisanStackNavigator.Screen key="Keisan1Route" name="Keisan1Route" component={Keisan1}/>
      <KeisanStackNavigator.Screen key="Keisan2Route" name="Keisan2Route" component={Keisan2}/>
         
    </KeisanStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  tabbar:{
    //flex:1,
    backgroundColor:'red',
    paddingTop: 10, // paddingTop を調整

  },
  tabBarContainer: {
    //marginTop:50,
    //flexDirection: 'row',
    backgroundColor: 'yellow',
    paddingVertical: 5,    
    height: 50,
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

export default KeisanStack;
