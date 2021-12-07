import { auth } from "../firebase";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";


export function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function signout() {
    return auth.signOut();
}