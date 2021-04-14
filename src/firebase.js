// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHL9jEe22G00C0OD_DMNguIFPjTqwLwsE",
  authDomain: "clone-745cf.firebaseapp.com",
  projectId: "clone-745cf",
  storageBucket: "clone-745cf.appspot.com",
  messagingSenderId: "165022864882",
  appId: "1:165022864882:web:570d41fc61e955d569876b",
  measurementId: "G-FSYCR60BC7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
