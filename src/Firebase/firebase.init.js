import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentification = ()=> {
    initializeApp(firebaseConfig);
}
export default initializeAuthentification ;