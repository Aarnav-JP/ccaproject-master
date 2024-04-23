// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "",
    authDomain: "saas-project-9f75b.firebaseapp.com",
    projectId: "saas-project-9f75b",
    storageBucket: "saas-project-9f75b.appspot.com",
    messagingSenderId: "654774951619",
    appId: "",
    measurementId: "G-XP5MYRQJV5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //Initialize variables
  const auth = firebase