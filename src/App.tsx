import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { initializeAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuJzWaR9npz8-eC9qtWdczwnMlcQCR3qI",
  authDomain: "test-firebase-33a57.firebaseapp.com",
  projectId: "test-firebase-33a57",
  storageBucket: "test-firebase-33a57.appspot.com",
  messagingSenderId: "120046803559",
  appId: "1:120046803559:web:96fb70be8c8aa8457f92c2",
  measurementId: "G-SLNENE422F"
};

firebase.initializeApp({
  firebaseConfig
})

// const app = initializeApp(firebaseConfig);
// const analytics  = getAnalytics(app);

const auth = firebase.auth();
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      <section>

      </section>
    </div>
  );
}

export default App;
