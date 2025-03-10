import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const CustomHeader = ({ options }) => {
  
  return ( 
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.leftContainer}>                 
      </View> 
      <View style={styles.middleContainer}>
        <Text
          style={styles.headerTitle}
          //adjustsFontSizeToFit={true}
          numberOfLines={1}
          //ellipsizeMode= 'tail'
          minimumFontScale={0.5}
          >
          {options.title} 
        </Text>
      </View>
      <View style={styles.rightContainer}>
        {/* 必要に応じてコンテンツを追加 */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    padding:'auto',
    flexDirection: 'row',
    alignItems: 'center',    
    backgroundColor: 'white',
    color:'black',
    height: 110,
    justifyContent: 'space-between', // 左右にスペースを均等に割り当てる
    paddingHorizontal: 10, // 左右のパディングを追加
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
  leftContainer: {
    //flex: 1, // 左側のスペースを均等にする
    justifyContent: 'center',
    alignItems: 'flex-start', // 左寄せ
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
    //flex: 1, // 右側のスペースを均等にする
    justifyContent: 'center',
    alignItems: 'flex-end', // 右寄せ
  }
})

export default CustomHeader
