// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOE99qM5E-FF5wLWauy5Ajid5UWCdSZTs",
  authDomain: "smart-build-auth.firebaseapp.com",
  projectId: "smart-build-auth",
  storageBucket: "smart-build-auth.appspot.com",
  messagingSenderId: "374194305496",
  appId: "1:374194305496:web:e7965816fbbf830d269aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;