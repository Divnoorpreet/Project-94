var firebaseConfig = {
    apiKey: "AIzaSyAtcMrWeXalZjRqkahcS0iBmcxV7KVXbR8",
    authDomain: "kwitter2-8d777.firebaseapp.com",
    databaseURL: "https://kwitter2-8d777-default-rtdb.firebaseio.com",
    projectId: "kwitter2-8d777",
    storageBucket: "kwitter2-8d777.appspot.com",
    messagingSenderId: "204396144736",
    appId: "1:204396144736:web:76d842f47158582362bb05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser(){
    //localStorage.setItem("user_name",document.getElementById("user_name").value);
    var user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"add user"
    });
    //window.location="kwitter_room.html";
}