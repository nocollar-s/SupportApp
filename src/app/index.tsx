import React from 'react';
import { NavigationIndependentTree } from '@react-navigation/native';
import { StyleSheet, View, StatusBar } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArticleStack from './ArticleStack';
import KeisanStack from './KeisanStack';
import HomeTab from './HomeTab';

const Tab = createBottomTabNavigator();

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <NavigationIndependentTree style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Tab.Navigator
          initialRouteName="Articles1"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'black',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 27,
              width: 320,
              marginHorizontal: 'auto',
              paddingVertical:20,
              margin: 3,
              marginBottom: 16,
            },
            headerShown: false,
            title: '補助金サポート',
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen
            name="Articles1"
            component={ArticleStack}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="book-open" size={28} color={color} style={styles.tabbar} />
              ),
            }}
          />
          <Tab.Screen
            name="Keisan1"
            component={KeisanStack}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="calculator" size={28} color={color} style={styles.tabbar} />
              ),
            }}
          />
          <Tab.Screen
            name="Seiji1Route"
            component={HomeTab}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="house" size={28} color={color} style={styles.tabbar} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationIndependentTree>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabbar: {
    alignItems: 'center',
  },
});

export default Index;
