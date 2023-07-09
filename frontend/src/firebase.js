// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
//import { firebase as stGet } from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6iWsjdl4w6nSksh-nbaP7f4Btl_4EArY",
  authDomain: "resume-parser-4d1d7.firebaseapp.com",
  projectId: "resume-parser-4d1d7",
  storageBucket: "resume-parser-4d1d7.appspot.com",
  messagingSenderId: "88066201048",
  appId: "1:88066201048:web:f0a3b5318bdc4031300ead",
  measurementId: "G-KJTT2M2DQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//var storageCollect = stGet.storage();
//const analytics = getAnalytics(app);
export const storage = getStorage(app);

//Ive only added firebase, thats it havent added firebase stuff to other files