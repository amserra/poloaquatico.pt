import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "@firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REAT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    this.fb = app;
    app.initializeApp(config);
    this.auth = app.auth();
    this.storage = app.storage();
    this.firestore = app.firestore();
  }
}

export default Firebase;
