import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
//import Orientation from 'react-native-orientation-locker'
//import { ScreenOrientationTypes } from 'react-native-screens';
//import * as ScreenOrientation from 'expo-screen-orientation'

const image1 = require('../../../assets/一般会計予算.png');

const Seiji4 = () => {
const { width, height } = Dimensions.get('window');
const imageHeight = 380;
const imageWidth = (857 / 409) * imageHeight;

  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}  // スクロールバーを表示
        style={styles.imageContainer}
        contentContainerStyle={{ flexDirection: 'row',width:800 }}
        snapToInterval={imageWidth} // 画像の横幅でスクロールを停止
        decelerationRate="fast" 
      >
        <ImageZoom
          cropWidth={800}
          cropHeight={imageHeight}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          initialOffsetX={(imageWidth - 800) / 2}
          initialScale={1}
        >
          <Image style={{ width: imageWidth, height: imageHeight }} source={image1} />
        </ImageZoom>
      </ScrollView>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          ここにテキストコンテンツが入ります。
          {`ここにテキストコンテンツが入ります。
  これは2行目のテキストです。
  さらに3行目のテキストが続きます。
  a
あ
い
う
え
お
か
き
く
け
こ
さ
し
す
`}
          {/* ... 長いテキスト ... */}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    paddingTop:10,
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    paddingTop:10,
    marginTop:10,
    height: 400,
    backgroundColor:'red',
    //width:500,
  },
  textContainer: {
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default Seiji4;