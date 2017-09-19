import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD8lTRFTbEoDBt8M9_FoBAabdAo6D04VFY",
    authDomain: "minilist-c8b60.firebaseapp.com",
    databaseURL: "https://minilist-c8b60.firebaseio.com",
    projectId: "minilist-c8b60",
    storageBucket: "minilist-c8b60.appspot.com",
    messagingSenderId: "694663920959"
  };
var fire = firebase.initializeApp(config);
export default fire;