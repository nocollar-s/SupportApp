import { Text, View,  StyleSheet } from 'react-native'
import { Feather} from'@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'


import MemoListItem from '../../components/MemoListIeItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/LogOutButton'

const handlePress = ():void => {
    router.push('/memo/create')
}

const Contents = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight : () => { return<LogOutButton /> }
        })                            
    },[])
    return (
        <View style={styles.container}>
            
            <View><Text>KijiHonbundayo!!</Text>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />              
            </View>               
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    } 
})

export default Contents
