import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const image1 = require('../../../assets/一般会計予算.png');

const Seiji4 = () => {
  const { width, height } = Dimensions.get('window');
  const imageHeight = 400;
  const imageWidth = (356 / 402) * imageHeight;
  // 元画像のアスペクト比

  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={styles.imageContainer}
        contentContainerStyle={{ flexDirection: 'row', width: 380 }}
        snapToInterval={imageWidth}
        decelerationRate="fast"
      >
        <ImageZoom
          cropWidth={380}
          cropHeight={imageHeight} // 修正: cropHeight を imageHeight に変更
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          initialOffsetX={(imageWidth - 380) / 2}
          initialScale={1}
        >
          <Image
            style={{ width: imageWidth, height: imageHeight }}
            source={image1}
            resizeMode="contain" // 修正: resizeMode を contain に設定
          />
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
    paddingTop: 10,
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    paddingTop: 10,
    marginTop: 10,
    height: 450,
    backgroundColor: 'red',
  },
  textContainer: {
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default Seiji4;
