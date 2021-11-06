
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVQc9IZS2iSEZkN_8j1xN7zJIWQ57jyY4",
    authDomain: "linkedin-gomycode.firebaseapp.com",
    projectId: "linkedin-gomycode",
    storageBucket: "linkedin-gomycode.appspot.com",
    messagingSenderId: "38429356793",
    appId: "1:38429356793:web:563378d858cb736ef6e828"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};