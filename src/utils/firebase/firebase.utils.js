import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  // signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCFiIxdm0yD_XJixJ-kmp2Jaef_1YxbdO4',
  authDomain: 'clothing-shop-db-409de.firebaseapp.com',
  projectId: 'clothing-shop-db-409de',
  storageBucket: 'clothing-shop-db-409de.appspot.com',
  messagingSenderId: '464170784288',
  appId: '1:464170784288:web:c75f01c604b6c788e88e45',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
