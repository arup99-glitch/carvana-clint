import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationApp = () => {
  initializeApp(firebaseConfig);
};

export default initializationApp;