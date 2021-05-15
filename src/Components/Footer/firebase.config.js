import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCaZ40Keqdv9HcCgUHAAJg3g7Rmn5p__9A",
    authDomain: "gtok-1f538.firebaseapp.com",
    projectId: "gtok-1f538",
    storageBucket: "gtok-1f538.appspot.com",
    messagingSenderId: "272081582137",
    appId: "1:272081582137:web:ad138fe977a1e5a35a35e8"
  };

  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

  export {firebaseConfig, db};