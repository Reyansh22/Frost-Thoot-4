//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAAyfVSCQw_LK-HbMIRttrAZdLX9S0vrQ4",
    authDomain: "kwittter-d530a.firebaseapp.com",
    databaseURL: "https://kwittter-d530a-default-rtdb.firebaseio.com",
    projectId: "kwittter-d530a",
    storageBucket: "kwittter-d530a.appspot.com",
    messagingSenderId: "913127874181",
    appId: "1:913127874181:web:0e7b67e16e9856273bd3ec",
    measurementId: "G-HB4PQ74CPF"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("user_name");


function send() {
    msg = document.getElementById("msg").value;
    console.log(msg);
    firebase.database().ref(room_name).push(
          { name:user_name,
                 message:msg, 
                 like:0
                 });
     document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
   }