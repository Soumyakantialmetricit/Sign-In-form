import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCSPeBqC3ZE1_t3OdooORcoT9s0thaF1sY",
  authDomain: "signin-form-7357c.firebaseapp.com",
  projectId: "signin-form-7357c",
  storageBucket: "signin-form-7357c.appspot.com",
  messagingSenderId: "233000125583",
  appId: "1:233000125583:web:343ba1368e7f1f06c65cfa",
  measurementId: "G-54Y2N1K734",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
