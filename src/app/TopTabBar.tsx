import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const routeDisplayNameMap = {
  Seiji1Route: '社会保険と\n選挙制度の変遷',
  Seiji2Route: '年金特別会計',
  Seiji3Route: '人口推移と\n生活保護',
  Seiji4Route: '四番目の画面',
};

const TopTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
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
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    height: 2000,
    padding: 20,
  },
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
