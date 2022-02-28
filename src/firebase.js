//for testing! Connects the app to firebase
import "firebase/auth";
import firebase from "firebase";
//const APIKEY = require("./secert");

firebase.initializeApp({
  // apiKey: APIKEY.GOOGLE_API_KEY,
  // authDomain: "germgangpractice.firebaseapp.com",
  // projectId: "germgangpractice",
  // storageBucket: "germgangpractice.appspot.com",
  // messagingSenderId: "1060499409594",
  // appId: "1:1060499409594:web:dbc946b85a2c5231e01083",
  apiKey: "AIzaSyAq1JEg8PhKMQmKlylLTPLWWVUOA322Ly8",
  authDomain: "bacterialid-100.firebaseapp.com",
  databaseURL: "https://bacterialid-100-default-rtdb.firebaseio.com",
  projectId: "bacterialid-100",
  storageBucket: "bacterialid-100.appspot.com",
  messagingSenderId: "802089058125",
  appId: "1:802089058125:web:bc2b32b48d36068567c104"
});

export const auth = firebase.auth();
export default firebase;
