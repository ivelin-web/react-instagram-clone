import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCztakH5kbQAx_-8SNOZtDLoq-8AmHTN1U",
    authDomain: "instagram-clone-react-e8004.firebaseapp.com",
    projectId: "instagram-clone-react-e8004",
    storageBucket: "instagram-clone-react-e8004.appspot.com",
    messagingSenderId: "485454194350",
    appId: "1:485454194350:web:9dcef08d4383719e2bef3f",
    measurementId: "G-1Z61LZMR0Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
