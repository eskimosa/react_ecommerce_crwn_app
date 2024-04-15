import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot.exists()); //checks if there's data in the db

    // if user data (snapshot) does not exist
    if(!userSnapshot.exists()) {
        const { displayName, email }= userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  };