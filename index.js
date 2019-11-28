import backLogin from "./views/login.js"

function logout() {
    firebase.auth().signOut().then(function() {
        alert("ok")
    }, function(error) {
        throw new Error("Failed")

    });
}

function setScreen(screen) {
    document.getElementById('demo').innerHTML = screen.content;
    screen.onload();
}

setScreen(backLogin);


export default setScreen;