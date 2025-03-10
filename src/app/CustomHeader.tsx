import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Animated, TouchableOpacity } from 'react-native';

const CustomHeader = ({ options }) => {
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  const headerHeight = isLandscape ? 60 : 110;
  const [hideHeader, setHideHeader] = useState(isLandscape); // 初期値を横画面に基づいて設定
  const translateY = useRef(new Animated.Value(isLandscape ? -headerHeight : 0)).current; // 初期値を横画面に基づいて設定

  useEffect(() => {
    // 画面の向きが変わったときに hideHeader を更新
    const onChange = ({ window: { width, height } }) => {
      const newIsLandscape = width > height;
      setHideHeader(newIsLandscape);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: hideHeader ? -headerHeight : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [hideHeader]);

  return (
    <TouchableOpacity
      style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}
      onPress={() => setHideHeader(!hideHeader)}
    >
      <Animated.View
        style={[styles.headerContainer, { height: headerHeight, transform: [{ translateY }] }]}
      >
        <View style={styles.leftContainer}></View>
        <View style={styles.middleContainer}>
          <Text style={styles.headerTitle}>{options.title}</Text>
        </View>
        <View style={styles.rightContainer}></View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    letterSpacing: 5,
    textAlign: 'center',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default CustomHeader;
