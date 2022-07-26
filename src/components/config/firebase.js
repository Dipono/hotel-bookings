// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
/*
const firebaseConfig = {
  apiKey: "AIzaSyC7ge4-PibK1TtX3FUsnKepyy76Alux_Cs",
  authDomain: "hotel-booking-app-35db9.firebaseapp.com",
  projectId: "hotel-booking-app-35db9",
  storageBucket: "hotel-booking-app-35db9.appspot.com",
  messagingSenderId: "737871790229",
  appId: "1:737871790229:web:7704d20653b40c3ce29b9c",
  measurementId: "G-PQ56CBD3N6"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyB2gdDyYMD3j3jIVC4gvKF8wx7Kh_Wat9I",
  authDomain: "hotel-c80cb.firebaseapp.com",
  projectId: "hotel-c80cb",
  storageBucket: "hotel-c80cb.appspot.com",
  messagingSenderId: "21925316628",
  appId: "1:21925316628:web:d0495ae461f84445d07f01",
  measurementId: "G-3VJ8QW2VV1"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

// initializing Firestore
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};