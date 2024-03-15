import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD9nHp2Cyklbpl6LGBtngkS2k13Qzv4tN4",
    authDomain: "vrwn-clothing-db-487df.firebaseapp.com",
    projectId: "vrwn-clothing-db-487df",
    storageBucket: "vrwn-clothing-db-487df.appspot.com",
    messagingSenderId: "935413755969",
    appId: "1:935413755969:web:588588117c31015199d6c0"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters( {
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
