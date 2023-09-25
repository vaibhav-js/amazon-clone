// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD5XsIP8PZrruvJtXvb8K3BxOVxyXvuvi0",
  authDomain: "clone-fae3f.firebaseapp.com",
  projectId: "clone-fae3f",
  storageBucket: "clone-fae3f.appspot.com",
  messagingSenderId: "421016223451",
  appId: "1:421016223451:web:b48a421a872054c97356fe",
  measurementId: "G-9KPHRREFD6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};