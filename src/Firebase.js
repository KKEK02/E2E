// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signOut } from "firebase/auth";
import { useAuth } from "./AuthContext";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword , sendPasswordResetEmail } from "firebase/auth";
import { getFirestore,setDoc,getDoc,doc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTp4S3TgHYd3iGrW5rq_HRIbxeopTRiec",
  authDomain: "cc-041405.firebaseapp.com",
  projectId: "cc-041405",
  storageBucket: "cc-041405.firebasestorage.app",
  messagingSenderId: "39191386389",
  appId: "1:39191386389:web:7023c125e1a06952bdb11c",
  measurementId: "G-NGLFF0LJ0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export var isLoggedin = false;

export const auth = getAuth(app);
const db = getFirestore(app);
export var accessToken = null;


//refres Token
export const storeRefreshToken = async (refreshToken=null,accessToken) => {
  accessToken = accessToken;
  const uid = auth.currentUser.uid;
  const docRef = doc(db, uid,"DriveToken");
  console.log(refreshToken,accessToken);
  await setDoc(docRef, {refreshToken: null,accessToken:accessToken});
  console.log("refreshToken stored");
};

export const getRefreshToken = async () => {
  const uid = auth.currentUser.uid;
  const docRef = doc(db, uid,"DriveToken");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    accessToken = docSnap.data().accessToken;
    return accessToken;
  } else {
    console.log("No such document!");
  }
  return null;
};

export const removeRefreshToken = async () => {
  accessToken = null;
  const uid = auth.currentUser.uid;
  const docRef = doc(db, uid,"DriveToken");
  await setDoc(docRef, {refreshToken: null,accessToken:null}); 
}




//Sign up with email and password
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user.displayName);
    }
    catch (error) {
        throw error
    }
}




//Login with email and password
export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    isLoggedin = true;
    console.log(user.displayName);
    }
    catch (error) {
        throw error
    }
}


const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for
  // this URL must be whitelisted in the Firebase Console.
  url: 'https://cc-041405.web.app/reset-password',
  // This must be true for email link sign-in.
  handleCodeInApp: true,
  // The domain must be configured in Firebase Hosting and owned by the project.
  linkDomain: 'localhost',
};

//reset password
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email, actionCodeSettings);
    console.log('Password reset link sent!');
  } catch (error) {
    throw(error);
  }
};

//logout
export const signout = async () => {
  try {
    await signOut(auth);
    isLoggedin = false;
    console.log('User signed out!');
  } catch (error) {
    throw(error);
  }
};


// Initialize Firebase Analytics
const analytics = getAnalytics(app);