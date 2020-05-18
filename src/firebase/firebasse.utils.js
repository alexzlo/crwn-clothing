import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAX40BUu5zAJDyXFV9W-FZsD2R-cQWZpVM",
    authDomain: "crwn-db-75441.firebaseapp.com",
    databaseURL: "https://crwn-db-75441.firebaseio.com",
    projectId: "crwn-db-75441",
    storageBucket: "crwn-db-75441.appspot.com",
    messagingSenderId: "459479347943",
    appId: "1:459479347943:web:7a101e5a9ab8056a662842",
    measurementId: "G-9D5W8KQBS3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;