import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsAXnaBUke8rwSHjTldsD3gZggD5gKi3k",
    authDomain: "react-app-5a3d1.firebaseapp.com",
    projectId: "react-app-5a3d1",
    storageBucket: "react-app-5a3d1.appspot.com",
    messagingSenderId: "137725893284",
    appId: "1:137725893284:web:c303236a34ef7dce7be431"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}