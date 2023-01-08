var firebaseConfig = {
      apiKey: "AIzaSyAc5n2fTWw0MpJLNXiJaJIBMfy_HJNPvJ0",
      authDomain: "kwitter-c50fc.firebaseapp.com",
      projectId: "kwitter-c50fc",
      storageBucket: "kwitter-c50fc.appspot.com",
      messagingSenderId: "526117565304",
      appId: "1:526117565304:web:b3145ac4b6f93bc4f44e8d"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
