var firebaseConfig = {
    apiKey: "AIzaSyBWsGrl-c9baFCsFOz9THzI70t7NQIepCg",
    authDomain: "lets-chat-93d13.firebaseapp.com",
    databaseURL: "https://lets-chat-93d13-default-rtdb.firebaseio.com",
    projectId: "lets-chat-93d13",
    storageBucket: "lets-chat-93d13.appspot.com",
    messagingSenderId: "110473320599",
    appId: "1:110473320599:web:e0da5032afff1aa1f771d2",
    measurementId: "G-M536VSLY2N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}