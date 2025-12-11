const firebaseConfig = {
  apiKey: "AIzaSyCvkFtpJVFZ4EcmZoyfUww4IeROMiC2wbY",
  authDomain: "book-management-app-3d12f.firebaseapp.com",
  projectId: "book-management-app-3d12f",
  storageBucket: "book-management-app-3d12f.firebasestorage.app",
  messagingSenderId: "90056373086",
  appId: "1:90056373086:web:c5bdb02d0726678b7015cf",
  measurementId: "G-WEKGGBMDF6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();