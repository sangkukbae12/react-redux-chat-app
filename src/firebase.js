import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
const projectName = "react-redux-slack-1c966";
const apiKey = "AIzaSyAQkNHVadSeVyC_fHCCSBVXLSbDFtHWUZ4";
const messagingSenderId = "152402616706";
const appId = "1:152402616706:web:1124984d7f29ea6fde6f9b";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: `${projectName}.firebaseapp.com`,
  databaseURL: `https://${projectName}.firebaseio.com`,
  projectId: `${projectName}`,
  storageBucket: `${projectName}.appspot.com`,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
