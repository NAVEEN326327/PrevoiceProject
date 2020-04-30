import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCZ6Trgi4Y-l6UG1nWCHtN_Vozqh60kNgQ",
    authDomain: "major-project-login-module.firebaseapp.com",
    databaseURL: "https://major-project-login-module.firebaseio.com",
    projectId: "major-project-login-module",
    storageBucket: "major-project-login-module.appspot.com",
    messagingSenderId: "58318788904",
    appId: "1:58318788904:web:ad45e6dcfcccd75955181d"
  };


  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;