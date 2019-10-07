const firebaseInstance = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's config
const config = {
  apiKey: "AIzaSyB5y0ojs76F_64wNlXWq5LjO19aMTdulcg",
  authDomain: "wot-management.firebaseapp.com",
  databaseURL: "https://wot-management.firebaseio.com",
  projectId: "wot-management",
  storageBucket: "",
  messagingSenderId: "694318321028",
  appId: "1:694318321028:web:47a62175cb165222c221d1"
};

let instance = null;

const initFirebase = () => {
  instance = firebaseInstance.initializeApp(config);
};

const getInstance = () => {
  if (!instance) {
    initFirebase();
  }
  return instance;
};
export { initFirebase, getInstance };
