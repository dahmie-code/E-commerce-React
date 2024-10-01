import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, Database } from 'firebase/database';


interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}


const firebaseConfig: FirebaseConfig  = {
  apiKey: "AIzaSyBTEV2AY4Avlf-XevCV0BoEqPNTQuP50Fc",
  authDomain: "luxefurni.firebaseapp.com",
  projectId: "luxefurni",
  storageBucket: "luxefurni.appspot.com",
  messagingSenderId: "908297339055",
  appId: "1:908297339055:web:b983a9cb6f6c230bf6145a",
  measurementId: "G-EQR8FS7M0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const database: Database = getDatabase(app);

export { database, analytics };