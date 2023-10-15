// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside firebase config', import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: 'AIzaSyDuwqjo8H5v19k-9P3Na1vBg1juyui70W0',
  authDomain: 'wedding-event-assignment-9.firebaseapp.com',
  projectId: 'wedding-event-assignment-9',
  storageBucket: 'wedding-event-assignment-9.appspot.com',
  messagingSenderId: '564418453736',
  appId: '1:564418453736:web:bf414accc8bb6cadf0295d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
