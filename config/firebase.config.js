// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdAJU_IjcqphY76Fj_jagrm7muAbvlIeE",
    authDomain: "pinpay-7fe87.firebaseapp.com",
    projectId: "pinpay-7fe87",
    storageBucket: "pinpay-7fe87.appspot.com",
    messagingSenderId: "602153924083",
    appId: "1:602153924083:web:b05d1a78056c9535450e86",
    measurementId: "G-FNREM618EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;