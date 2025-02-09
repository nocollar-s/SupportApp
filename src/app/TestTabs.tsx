import React, { useRef } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import FirstRoute from './FirstRoute'; // FirstRoute コンポーネントをimport
import SecondRoute from './SecondRoute';
import ThirdRoute from './ThirdRoute';
import FourthRoute from './FourthRoute';
import { PanGestureHandler, GestureHandlerRootView, State } from 'react-native-gesture-handler';
import { Animated } from 'react-native';


const TestTabs = () => {
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'fir', title: 'Item 1 (生活支援)' },
    { key: 'seco', title: 'Item 2 (医療支援)'},
    { key: 'thir', title: 'Item 3 (仕事に関連する支援) '}
    //{ key: 'fourth', title: 'Item 4 (子ども支援)', tabStyle: { backgroundColor: 'lightyellow' } },
  ]);

  const renderScene = SceneMap({
    fir: FirstRoute,
    seco: SecondRoute,
    thir: ThirdRoute,
    //fourth: FourthRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      style={styles.tabs}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
      tabStyle={styles.tab} // 各タブのスタイル
    />
  );

  const { width } = Dimensions.get('window');
  const translateX = useRef(new Animated.Value(0)).current;

  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const handleHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      const velocityX = event.nativeEvent.velocityX;
      const shouldSwitch = Math.abs(velocityX) > 300; // スワイプ速度の閾値

      if (shouldSwitch) {
        const newIndex = velocityX > 0 ? Math.max(0, index - 1) : Math.min(routes.length - 1, index + 1);
        setIndex(newIndex);
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };



  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleHandlerStateChange}
        // collapsable={false} // Androidで必要
      >
        <Animated.View style={{ flex: 1, width: width, transform: [{ translateX }] }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width:layout.width, height: 300 }}
            renderTabBar={renderTabBar}
          />
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    backgroundColor: 'black',
  },
  tab: {
    width: 'auto', // タブの幅を自動調整
    borderWidth: 1, // 枠線をつける
    borderColor: '#ccc', // 枠線の色
    borderRadius: 5, // 角丸をつける
    margin: 5, // タブ間の間隔
    padding: 10, // タブ内のパディング
  },
  indicator: {
    backgroundColor: '#4dc4c0',
  },
  label: {
    color: 'black',
  },
});

export default TestTabs;