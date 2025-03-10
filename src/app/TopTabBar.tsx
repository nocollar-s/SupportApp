import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions, Animated } from 'react-native';

const routeDisplayNameMap = {
  Seiji1Route: '社会保険と\n選挙制度の変遷',
  Seiji2Route: '年金特別会計',
  Seiji3Route: '人口推移と\n生活保護',
  Seiji4Route: '四番目の画面',
};

const TopTabBar = ({ state, descriptors, navigation }) => {
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  const tabBarHeight = isLandscape ? 80 : 120;
  const [hideTabBar, setHideTabBar] = useState(isLandscape);
  const translateY = useRef(new Animated.Value(isLandscape ? -tabBarHeight : 0)).current;

  useEffect(() => {
    const onChange = ({ window: { width, height } }) => {
      const newIsLandscape = width > height;
      setHideTabBar(newIsLandscape);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: hideTabBar ? -tabBarHeight : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [hideTabBar]);

  return (
    <TouchableOpacity
      style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}
      onPress={() => setHideTabBar(!hideTabBar)}
    >
      <Animated.View
        style={[styles.tabBarContainer, { height: tabBarHeight, transform: [{ translateY }] }]}
      >
        <SafeAreaView style={styles.safe}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;
              const displayName = routeDisplayNameMap[route.name] || route.name;

              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => {
                    console.log(route.name);
                    navigation.navigate(route.name);
                  }}
                  style={[styles.tab, isFocused && styles.tabFocused]}
                >
                  <Text style={[styles.tabText, isFocused && styles.tabTextFocused]}>
                    {displayName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'green',

  },
  tabBarContainer: {
    backgroundColor: 'yellow',

  },
  tab: {
    backgroundColor: 'red',
    padding: 5,
    marginHorizontal: 5,
    //marginVertical: 'auto',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 65,
    justifyContent: 'center',
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

export default TopTabBar;
