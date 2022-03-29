// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCqg7jzPnVMuK8ySngNq6VyWh-k5V8X4",
  authDomain: "knightsco-8b498.firebaseapp.com",
  projectId: "knightsco-8b498",
  storageBucket: "knightsco-8b498.appspot.com",
  messagingSenderId: "550191252402",
  appId: "1:550191252402:web:b546379c5cc2a00e079aab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };