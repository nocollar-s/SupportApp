import React from 'react'
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import Articles from "./memo/articles"
import Kihonteate from "./memo/kihonteate"
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import HomeButton from '../components/HomeButton'
import{ AntDesign } from '@expo/vector-icons'

const Stack = createStackNavigator()

// カスタムヘッダーコンポーネント
const CustomHeader = ({ navigation, route, options, back }) => {
    return (
        <View style={styles.headerContainer}>
            {back && ( 
            // back が存在する場合（前の画面がある場合）に表示
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name='leftcircleo' size='33' color='#ffffff' />
                </TouchableOpacity>
            )}
            <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}> {options.title} </Text> 
            {/* タイトルを表示 */}
            {/* 他の要素（ボタンなど）を追加可能 */}
            
            </View>
        </View>
    )
}

const Index = ():JSX.Element => {
    return(
        <NavigationIndependentTree>
            <Stack.Navigator>
                <Stack.Screen name='Articles' component={Articles}
                options={{title: '補助金サポート', header: CustomHeader}} />
                <Stack.Screen name='Kihonteate' component={Kihonteate}
                options={{title: '補助金サポート', header: CustomHeader}} />
                               
            </Stack.Navigator>
        </NavigationIndependentTree>
    )
}

const styles = StyleSheet.create({
    headerContainer: {    
        flexDirection: 'row', // 要素を横に並べる
        alignItems: 'center', // 垂直方向に中央揃え
        backgroundColor: 'black',
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'

    },
    backButton: {
        position: 'absolute',
        left: 10,        
        color: 'black',
        fontSize: 18        
    },
    titleContainer: { 
        // タイトルを中央に配置するためのスタイル
        flex: 1, // タイトルが利用可能なスペースを埋める
        justifyContent: 'center', // 垂直方向に中央揃え
        alignItems: 'center' // 水平方向に中央揃え
    },
    headerTitle: {        
        color: 'white',
        fontSize: 20,
        alignItems: 'center'
    }    
})

export default Index