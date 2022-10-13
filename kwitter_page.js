//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAvZSop8JQbVhyvF3p_G4EQRr0Nm4kgx_w",
      authDomain: "kwitter-app-de19e.firebaseapp.com",
      databaseURL: "https://kwitter-app-de19e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-de19e",
      storageBucket: "kwitter-app-de19e.appspot.com",
      messagingSenderId: "1005993354331",
      appId: "1:1005993354331:web:ba2b72fadb7d4f47f94b7e"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    
   username=localStorage.getItem("user_name")
   room_name=localStorage.getItem("Room_name")

function send(){
msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({

      name:username,message:msg,like:0
});

document.getElementById("msg").value="";}

      


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
like=message_data['like'];
message=message_data['message'];
nametag="<h4>"+name1+"<img src='tick.png' class='user_tick'></h4>"
messagetag="<h4 class='message_h4'>"+message+"</h4>"
liketag="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>like:="+like+"</span></button><hr>"
tags=nametag+messagetag+liketag
document.getElementById("output").innerHTML+=tags
//End code
      } });  }); }
getData();
function updatelike(msg_id){
console.log(msg_id)
likes=document.getElementById(msg_id).value;
uplikes=Number(likes)+1;
firebase.database().ref(room_name).child(msg_id).update({
      like:uplikes
});


}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location=("index.html");
      }
