// firebaseClient.ts

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'


    var firebaseConfig = {
        apiKey: "AIzaSyA7CsD0JXw8Skb1IKdgyeaqTxYRgy57T_0",
        authDomain: "thepeoplenews-7d31e.firebaseapp.com",
        projectId: "thepeoplenews-7d31e",
        storageBucket: "thepeoplenews-7d31e.appspot.com",
        messagingSenderId: "543634230454",
        appId: "1:543634230454:web:e9c9c599a47e4624b76a17",
        measurementId: "G-TGFCVZN331"
      };
      // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

let auth = firebase.auth();

export { firebase, auth };