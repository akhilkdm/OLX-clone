import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRVMNGeozi0l2U8AGT_cja56gGzFer9z8",
    authDomain: "fir-a4d11.firebaseapp.com",
    projectId: "fir-a4d11",
    storageBucket: "fir-a4d11.appspot.com",
    messagingSenderId: "370242200525",
    appId: "1:370242200525:web:1aa854a298a61dd1585a84",
    measurementId: "G-9TEB8K52HL"
  };

export default firebase.initializeApp(firebaseConfig)