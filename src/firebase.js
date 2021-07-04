import firebase from "firebase";
import environment from "./environment";

const firebaseApp = firebase.initializeApp(environment.firebaseConfig);
const db = firebase.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
