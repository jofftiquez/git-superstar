import firebase from 'firebase';

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
});

export const auth = firebase.auth();
export const db = firebase.database();
export const storage = firebase.storage();
export const ref = firebase.database().ref(process.env.VERSION);