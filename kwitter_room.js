
//ADD YOUR FIREBASE LINKS HERE
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
   document.getElementById("user_name").innerHTML="Welcome  "+ username+"  !";
    
function addroom(){
roomname=document.getElementById("Room_name").value;
firebase.database().ref("/").child(roomname).update({
purpose:"adding roomname"

});
localStorage.setItem("Room_name",roomname);

//window.location="kwitter_page.html";


}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roonnames are"+ Room_names)
       row="<div class='room_name'id="+ Room_names+" onclick='redirect(this.id)'>"+ Room_names+"</div> <hr>"
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
console.log(name);
localStorage.setItem("Room_name",name);
window.location=("kwitter_page.html");
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("Room_name");
window.location=("index.html");
}