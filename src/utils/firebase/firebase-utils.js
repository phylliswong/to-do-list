import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// TODO: move keys to a .env file
const firebaseConfig = {
  apiKey: "AIzaSyDVBYP3OzXJJD7okMwFcXh4akG8mctzFxw",
  authDomain: "to-do-app-e78a2.firebaseapp.com",
  projectId: "to-do-app-e78a2",
  storageBucket: "to-do-app-e78a2.appspot.com",
  messagingSenderId: "416452405924",
  appId: "1:416452405924:web:c07d0d3aa1087d75949431"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch(error) {
      throw new Error('error creating the user', error.message);
    }
  }
  console.log(userSnapshot.exists());
  return userDocRef;
}
