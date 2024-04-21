import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCB-6LxcRVCpHAigaoX-z4MbQr7g2SzbmM",
    authDomain: "shirt-tinder.firebaseapp.com",
    projectId: "shirt-tinder",
    storageBucket: "shirt-tinder.appspot.com",
    messagingSenderId: "747822070063",
    appId: "1:747822070063:web:256f6290639775fb6409da",
    measurementId: "G-1KC2414BK5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  //allows this database to be used in different files
  export default database; 