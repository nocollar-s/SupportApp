import {
    View, Text ,TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'

import{ Link, router } from 'expo-router'

import Button from'../../components/Button'

const handlePresss=(): void => {
     //ログイン
    router.replace('/memo/list')
    //replaceだと置き換え、pushだと前ページに戻れる
}

const LogIn =():JSX.Element =>{
    return (
        <View style={styles.container}>

            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input}value='Email address' />
                <TextInput style={styles.input}value='Password' />
                <Button label='Submit' onPress={handlePresss} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registerd?</Text>
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    title:{
        fontSize: 25,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    inner:{
        paddingVertical: 24,
        paddingHorizontal: 27,
    },
    input:{
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderColor: '#dddddd',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    footer:{
        flexDirection: 'row',
    },
    footerText:{
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color:'#000000'
    },
    footerLink:{
        fontSize: 14,
        lineHeight: 24,
        color:'#467FD3'

    }
})

export default LogIn
