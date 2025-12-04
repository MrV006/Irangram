
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiTAiDphBPNjd4dKwEYArGY8pXWf55sZQ",
  authDomain: "irangram-79830.firebaseapp.com",
  projectId: "irangram-79830",
  storageBucket: "irangram-79830.firebasestorage.app",
  messagingSenderId: "355877653612",
  appId: "1:355877653612:web:5512841c0ab55b6b011c49",
  measurementId: "G-RZWEBR7XJ7"
};

// Initialize Firebase
let app;
let db: any = null;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase Connected Successfully");
} catch (error) {
    console.error("Firebase Initialization Error:", error);
}

export { db };
