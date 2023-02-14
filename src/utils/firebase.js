import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCgUey8yNCewiMPfWkClH9cAE4wDODX_iY",
  authDomain: "coderhouse-2d233.firebaseapp.com",
  projectId: "coderhouse-2d233",
  storageBucket: "coderhouse-2d233.appspot.com",
  messagingSenderId: "158521577206",
  appId: "1:158521577206:web:fe915f892e22cb65db26d7",
  measurementId: "G-MF144J0NK2",
};

let db = null;

const createDbContext = () => {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
};

const getDbContext = () => {
  if (!db) {
    createDbContext();
  }
  return db;
};

export { createDbContext, getDbContext };
