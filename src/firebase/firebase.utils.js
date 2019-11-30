import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkbcTqx_mouEzDPqkE-00uM913GvL-UTE",
  authDomain: "myecommerceproject-4469a.firebaseapp.com",
  databaseURL: "https://myecommerceproject-4469a.firebaseio.com",
  projectId: "myecommerceproject-4469a",
  storageBucket: "myecommerceproject-4469a.appspot.com",
  messagingSenderId: "98586502466",
  appId: "1:98586502466:web:d8b153a1a228337a"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
