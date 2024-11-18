import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let config = {
    apiKey: "AIzaSyCVBq59SxQad8ULVCwHnWYEGC85BqUAHP0",
    authDomain: "example-c206c.firebaseapp.com",
    databaseURL: "https://example-c206c-default-rtdb.firebaseio.com",
    projectId: "example-c206c",
    storageBucket: "example-c206c.firebasestorage.app",
    messagingSenderId: "624485683135",
    appId: "1:624485683135:web:0ec547586675771ffa5b0a",
    measurementId: "G-74FBY11Q0G"
};

const firebaseApp = initializeApp(config);

export const firestore = getFirestore(firebaseApp);