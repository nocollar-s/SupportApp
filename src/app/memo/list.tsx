import { Text, View,StyleSheet } from 'react-native'
import { Feather} from'@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'



const handlePress = ():void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight : () => { return<LogOutButton /> }
        })
    },[])
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />              
            </View>               
            <CircleButton onPress={handlePress}>
                <Feather name='plus' size={40} />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    } 
})

export default List
