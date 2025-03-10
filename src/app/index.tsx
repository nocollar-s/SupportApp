import React from 'react';
import { NavigationIndependentTree } from '@react-navigation/native';
import { StyleSheet, View, StatusBar} from 'react-native';
//import MyTabs from './TestTabs'; // MyTabs コンポーネントをインポート
//import Articles from './memo/articles';
//import Keisan from './memo/keisan';
import { FontAwesome6 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArticleStack from './ArticleStack'
import KeisanStack from './KeisanStack';
import HomeStack from './HomeStack';
import HomeTab from './HomeTab';

const Tab = createBottomTabNavigator();

const Index = ():JSX.Element => {
  return (
    <View style={styles.container}> 
    <NavigationIndependentTree style={styles.container}>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Tab.Navigator initialRouteName='Articles1' 
        screenOptions={{tabBarStyle: {
        backgroundColor: 'black',
        height: 55,
        alignItems: 'center', // アイコンを中央に配置
        justifyContent:'center',
        borderRadius:27,
        width:'270',
        marginHorizontal:'auto',
        margin:5,
        marginBottom:20,        
        },
        headerShown: false,
        title: '補助金サポート',
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'gray',
        }}>
          <Tab.Screen name='Articles1' component={ArticleStack}
          options={{
          tabBarLabel: '記事',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="book-open" size={25} color={color} style={styles.tabbar}  />
        ),
          }}/>
          <Tab.Screen name='Keisan1' component={KeisanStack}
          options={{
          tabBarLabel: '計算', // tabBarLabelを追加
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="calculator" size={28} color={color} style={styles.tabbar} />
          )}}/>

          <Tab.Screen name='Seiji1Route' component={HomeTab}
          options={{
          tabBarLabel: '家', // tabBarLabelを追加
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house" size={28} color={color} style={styles.tabbar} />
          )}}/>             

      </Tab.Navigator>     
    </NavigationIndependentTree>
    </View>
)};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',

  },
  navi:{
    backgroundColor:'green',

  },
  tabbar: {
    color:'white',
    alignItems:'center',
    justifyContent:'center',  
    paddingBottom:8,
  }
})

export default Index;
