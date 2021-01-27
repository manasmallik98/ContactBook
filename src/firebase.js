import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB6H588tR2ZT_LYFrjPeUajXEGE8epZ2lA",
    authDomain: "contact-info-a2de7.firebaseapp.com",
    databaseURL: "https://contact-info-a2de7.firebaseio.com",
    projectId: "contact-info-a2de7",
    storageBucket: "contact-info-a2de7.appspot.com",
    messagingSenderId: "658483180582",
    appId: "1:658483180582:web:df19ef1daebe3b69c6e2e7"
  };
  // Initialize Firebase
  var fireDb=firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();