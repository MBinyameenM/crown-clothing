import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDwrEO--xuIQKwgzMb9ABCbALhtERA9NFQ",
    authDomain: "crown-clothing-dfda4.firebaseapp.com",
    databaseURL: "https://crown-clothing-dfda4.firebaseio.com",
    projectId: "crown-clothing-dfda4",
    storageBucket: "crown-clothing-dfda4.appspot.com",
    messagingSenderId: "835514121868",
    appId: "1:835514121868:web:69e99411953cedacdbc5a9",
    measurementId: "G-43372ZSF2Z"
  };

  firebase.initializeApp(config);
  
  export const CreateUserProfileDocument = async ( userAuth, additionalData) => {

    if( !userAuth ) return;

    const userRef =  firestore.doc(`Users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exist )
    {
        const username = userAuth.displayName;
        const email = userAuth.email;
        const date = new Date();

        try{
            userRef.set({
                username,
                email,
                date,
                ...additionalData
            });

        }catch (error){
            console.log(`Error while creating user: ${error}`);
        }
    }
    return userRef;

  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);



  export default firebase;