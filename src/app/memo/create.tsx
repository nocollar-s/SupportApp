import { 
    View, TextInput, StyleSheet
 } from 'react-native'
import{ router } from 'expo-router'
import{ collection, addDoc, Timestamp} from'firebase/firestore'
import{ useState }from 'react'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingview'



import { Feather } from '@expo/vector-icons'
import{db, auth} from'../../config'

const handlePress = (bodyText: string ):void => {
    if(auth.currentUser == null){ return }
    const ref = collection(db,`users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        bodyText,
        updatedAt:Timestamp.fromDate(new Date())
    })
     .then((docRef) =>{
        console.log('succes',docRef.id)
        router.back()
     })
      .catch((error) =>{
       console.log(error) 
      })

}
const Create = ():JSX.Element => {
    const[bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                multiline 
                style={styles.input} 
                value={bodyText}
                onChangeText={(text) => { setBodyText(text) }} 
                />
            </View>
            <CircleButton onPress={() => {handlePress(bodyText) }}>
                <Feather name='check' size={40} color='#ffffff' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    inputContainer:{
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex :1
    },
    input:{
        flex :1, 
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Create