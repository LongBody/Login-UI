import setScreen from '../index.js'
import logScreen from "./logout.js"

document.getElementById('signIn').addEventListener('click', function() {


    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        setScreen(logScreen)
    }).catch(function(error) {

    });
})