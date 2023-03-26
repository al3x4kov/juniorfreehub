import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnKw_pQq92S8ZUbsV6MB6Sc_ARRM6j4WM",
    authDomain: "juniorfreehub.firebaseapp.com",
    projectId: "juniorfreehub",
    storageBucket: "juniorfreehub.appspot.com",
    messagingSenderId: "374440243134",
    appId: "1:374440243134:web:11ba220d7f04559cc2d3ef",
    measurementId: "G-Q1C34CJJHY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
