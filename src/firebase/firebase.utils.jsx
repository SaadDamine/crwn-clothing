// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYW-CQ56UKB0-ZvM5Qyw9IQ5SsEPQGREY",
    authDomain: "crwn-db-566ca.firebaseapp.com",
    projectId: "crwn-db-566ca",
    storageBucket: "crwn-db-566ca.appspot.com",
    messagingSenderId: "580468866989",
    appId: "1:580468866989:web:5467ead072a11b4e652b24",
    measurementId: "G-C2DBZNSQ1F"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );
export const firestore = getFirestore( app );

const provider = new GoogleAuthProvider();
export const signInWithGoole = () => signInWithPopup( auth, provider );

export const createUserProfileDocument = async ( userAuth, additionalData ) =>
{
    if ( !userAuth ) return;

    const userRef = doc( firestore, "users", userAuth.uid );

    const user = await getDoc( userRef );

    if ( !user.exists() )
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc( userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData,
            } );  
        } catch (error) {
            console.log( 'error creating user ', error.message );
        }
    }
    return getDoc(userRef);
}