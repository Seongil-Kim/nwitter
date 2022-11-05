// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAdOH8TXqmyUO--ufH3Nf7tWiGEUNrl9Cw",
//   authDomain: "nwitter-bf0de.firebaseapp.com",
//   projectId: "nwitter-bf0de",
//   storageBucket: "nwitter-bf0de.appspot.com",
//   messagingSenderId: "539043200404",
//   appId: "1:539043200404:web:d66e6d0a2c95236daa2381"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// const Firebase=()=>{
//     initializeApp(firebaseConfig);
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// export default Firebase;