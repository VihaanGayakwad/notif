importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDcrc_-bE-q2P8yLlD7OzkUndhNbnPoPlo",
  authDomain: "demothing-7cde7.firebaseapp.com",
  databaseURL: "https://demothing-7cde7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "demothing-7cde7",
  storageBucket: "demothing-7cde7.firebasestorage.app",
  messagingSenderId: "454100720417",
  appId: "1:454100720417:web:7b2e895beacbb3d585bc60"
});

const messaging = firebase.messaging();
