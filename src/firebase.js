import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAvTIEoGfezHOxORBablArsIjTmxKm8h6U",
    authDomain: "messenger-clone-3775a.firebaseapp.com",
    projectId: "messenger-clone-3775a",
    storageBucket: "messenger-clone-3775a.appspot.com",
    messagingSenderId: "653089358020",
    appId: "1:653089358020:web:7b7c7936ab612b061f8991",
    measurementId: "G-EKQBJE8W03"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;