var app_firebase={};
(function(){
    var firebaseConfig = {
    apiKey: "AIzaSyBoJDOeZ4qIpYb2--szCimIg9_PxEdf2-4",
    authDomain: "fb-longbody.firebaseapp.com",
    databaseURL: "https://fb-longbody.firebaseio.com",
    projectId: "fb-longbody",
    storageBucket: "fb-longbody.appspot.com",
    messagingSenderId: "821774709362",
    appId: "1:821774709362:web:1fb40a1f7fa5bc872f48eb",
    measurementId: "G-E991H5QVGY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
app_firebase=firebase;
})()