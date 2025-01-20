import { View, Text , StyleSheet } from 'react-native'

const Hello = (props): JSX.Element => {
    const children = props.children
    return (
        <View>
            <Text style={styles.text}>Hello {children}
                
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: '#ffffff',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        padding: 16
    }
})

export default Hello

