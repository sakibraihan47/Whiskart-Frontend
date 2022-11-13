import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxA4yNTMskQkeQY2HCBZlsuKNReI1wKaE",
  authDomain: "whiskart-5195e.firebaseapp.com",
  projectId: "whiskart-5195e",
  storageBucket: "whiskart-5195e.appspot.com",
  messagingSenderId: "791073138931",
  appId: "1:791073138931:web:0950c646eda23362482f86",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
