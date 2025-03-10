import React, { useState, useEffect } from 'react';
import { NavigationIndependentTree } from '@react-navigation/native';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArticleStack from './ArticleStack';
import KeisanStack from './KeisanStack';
import HomeStack from './HomeStack';
import HomeTab from './HomeTab';

const Tab = createBottomTabNavigator();

const Index = (): JSX.Element => {
  const { width, height } = Dimensions.get('window');
  const [isLandscape, setIsLandscape] = useState(width > height);

  useEffect(() => {
    const onChange = ({ window: { width, height } }) => {
      setIsLandscape(width > height);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return (
    <View style={styles.container}>
      <NavigationIndependentTree style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Tab.Navigator
          initialRouteName="Articles1"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'black',
              height: isLandscape ? 35 : 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 27,
              width: '270',
              marginHorizontal: 'auto',
              margin: 2,
              marginBottom: 14,
              paddingTop:isLandscape ? 7:0,
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
                <FontAwesome6
                  name="book-open"
                  size={isLandscape ? 20 : 23}
                  color={color}
                  style={styles.tabbar}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Keisan1"
            component={KeisanStack}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6
                  name="calculator"
                  size={isLandscape ? 20 : 23}
                  color={color}
                  style={styles.tabbar}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Seiji1Route"
            component={HomeTab}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6
                  name="house"
                  size={isLandscape ? 20 : 23}
                  color={color}
                  style={styles.tabbar}
                />
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
    //color: 'green',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingBottom: 0,
    marginBottom:0,
    //paddingTop:0,
    //marginTop:0,
    //marginVertical: 'auto',
  },
});

export default Index;
