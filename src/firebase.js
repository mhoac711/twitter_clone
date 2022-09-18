
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP3H5Mni1qVlWCc2TrIhHS-oBBZOifnpw",
  authDomain: "twitter-clone-bf358.firebaseapp.com",
  projectId: "twitter-clone-bf358",
  storageBucket: "twitter-clone-bf358.appspot.com",
  messagingSenderId: "693559142414",
  appId: "1:693559142414:web:82056ebe9414d75da6345f",
  measurementId: "G-R51H4JJF15"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.fireStore();

export default db;
