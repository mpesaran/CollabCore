import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCpjPv6KiEh2iqfPcyMaPYxdHeYI-VFkDQ",
    authDomain: "collabcore-d3ae2.firebaseapp.com",
    projectId: "collabcore-d3ae2",
    storageBucket: "collabcore-d3ae2.appspot.com",
    messagingSenderId: "431904659491",
    appId: "1:431904659491:web:416d6fb7e4f58d629ab996"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectAuth , projectFirestore , projectStorage ,  timestamp }