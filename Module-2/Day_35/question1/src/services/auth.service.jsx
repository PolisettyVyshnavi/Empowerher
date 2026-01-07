import axios from "axios";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";


const authService = {
login: (email, password) => signInWithEmailAndPassword(auth, email, password),
signup: (email, password) => createUserWithEmailAndPassword(auth, email, password),
logout: () => signOut(auth),
};


export default authService;