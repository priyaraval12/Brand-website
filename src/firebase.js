import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAxGgnnIdV-rnbhUvxE-Qa-d-WPwWqed0g",
  authDomain: "brandglobaltv-a1df8.firebaseapp.com",
  databaseURL:"https://brandglobaltv-a1df8-default-rtdb.firebaseio.com/",
  projectId: "brandglobaltv-a1df8",
  storageBucket: "brandglobaltv-a1df8.appspot.com",
  messagingSenderId: "707962906795",
  appId: "1:707962906795:web:92faf2ed2cc8b86f50afee",
  measurementId: "G-ZFJ4XPVEBB"
 
};


const app = initializeApp(firebaseConfig);


export { app};