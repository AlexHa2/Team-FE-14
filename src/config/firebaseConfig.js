
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_GOOGLE_API,
  apiKey: 'AIzaSyC6mB4AdYJaQ0peQP21DhmejoFPR4-rUvM',
  authDomain: "login-74327.firebaseapp.com",
  databaseURL: "https://login-74327-default-rtdb.firebaseio.com",
  projectId: "login-74327",
  storageBucket: "login-74327.appspot.com",
  messagingSenderId: "1000112856844",
  appId: "1:1000112856844:web:c3f0761c4ef6599c3c7329",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

