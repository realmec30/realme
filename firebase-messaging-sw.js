// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoaOnj64W6IF4heAYHcXoZAuAEGVMg_O0",
  authDomain: "fir-60afc.firebaseapp.com",
  databaseURL: "https://fir-60afc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-60afc",
  storageBucket: "fir-60afc.firebasestorage.app",
  messagingSenderId: "581622746792",
  appId: "1:581622746792:web:0f1bb27722f72c8d16bc9d",
  measurementId: "G-S5L1D1ND7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Request notification permission in your script
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
      console.log('Notification permission granted.');
  } else {
      console.log('Notification permission denied.');
  }
});

//Get FCM Token
import { getToken } from "firebase/messaging";

getToken(messaging, { vapidKey: 'BImrepT8amAyV5IERokl8pdOb1328_7B7fDfXGm-3P5yT7TbxEs7HPPsCIMMNPYmsgsA5k0jl5FCZ9QTkaLQADg ' })
    .then((currentToken) => {
        if (currentToken) {
            console.log('FCM Token:', currentToken);
        } else {
            console.log('No registration token available.');
        }
    })
    .catch((err) => {
        console.error('An error occurred while retrieving token:', err);
    });
