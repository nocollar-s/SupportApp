import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyCtUQ_rChQAlkxPj7qRNGZ44lKH-qQrvCc",
    authDomain: "support-306db.firebaseapp.com",
    projectId: "support-306db",
    storageBucket: "support-306db.firebasestorage.app", 
    messagingSenderId: "793093291934",
    appId: "1:793093291934:web:a5798b8b0567258b1b208f"
  }
  
  const app = initializeApp(firebaseConfig)
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  })
  const db = getFirestore(app)

  export {app, auth, db}
