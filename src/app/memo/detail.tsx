import { View, Text, ScrollView, StyleSheet } from 'react-native'
import {router} from 'expo-router'

import {Feather } from '@expo/vector-icons'


const handlePress = (): void =>{
    router.push('/memo/edit')
}

const Detail = ():JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>日付時刻</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    何々何々何々
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress}style={{ top:60, bottom:'auto'}}>
                <Feather name='plus' size={40} />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader:{
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle:{
        color:'#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight:'bold'
    },
    memoDate:{
        color:'#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText:{
        fontSize: 16,
        lineHeight: 24,
        color:'#000000',
    }
})

export default Detail