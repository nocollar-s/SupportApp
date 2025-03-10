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
    <SafeAreaView style={{ backgroundColor: 'yellow' }}>
      <View style={styles.tabBarContainer}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'yellow',
    paddingVertical: 5,
    height: 75,
  },
  tab: {
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 'auto',
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
