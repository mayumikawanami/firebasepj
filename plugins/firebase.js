import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCp8Xsh98GN_ktmDlH8_0At8zgHnNIGzHo",
  authDomain: "fir-pj-9069e.firebaseapp.com",
  projectId: "fir-pj-9069e",
  storageBucket: "fir-pj-9069e.appspot.com",
  messagingSenderId: "353467968728",
  appId: "1:353467968728:web:4f764d32ae8b9a1c7ffbad",
  measurementId: "G-RYCNF441YT"
  });
}

export default firebase;