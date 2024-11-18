import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let config = {
    /* put project data here */
};

const firebaseApp = initializeApp(config);

export const firestore = getFirestore(firebaseApp);