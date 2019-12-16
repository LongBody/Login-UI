import setScreen from '../index.js'
import logScreen from "./logout.js"

var db = firebase.firestore();
document.getElementById('signIn').addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {

        var popEmail = result.user.email

        // db.collection("Users").get().then((querySnapshot) => {
        //     console.log(querySnapshot)
        //     querySnapshot.forEach((doc) => {
        //         var email = `${doc.data().email}`
        //             // console.log(`${doc.id} => ${doc.data().email}`);
        //         if (email === popEmail) {
        //             name = ` ${doc.data().name}`
        //             ten.style.display = "block"
        //             ten.innerHTML = name

        //         }

        //     });
        // });
        function getEmailName(popEmail) {
            ten.style.display = "block"
            ten.innerHTML = popEmail.substring(0, popEmail.indexOf('@'))
        }
        getEmailName(popEmail)

        setScreen(logScreen)

    }).catch(function(error) {

    });
})