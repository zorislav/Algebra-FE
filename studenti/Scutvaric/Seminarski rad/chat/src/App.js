import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp ({
  apiKey: "AIzaSyA1mBnrjzs9Iur4MoPX1ix2Pm8xJemobew",
  authDomain: "chat-app-aa32e.firebaseapp.com",
  projectId: "chat-app-aa32e",
  storageBucket: "chat-app-aa32e.appspot.com",
  messagingSenderId: "921635251309",
  appId: "1:921635251309:web:10f662df78466d04598b64",
  measurementId: "G-9S2V7XMZ7R"
})

const auth = firebase.auth();
const firestore = firebase.firestore();




function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

function SignIn () {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut () {
  return auth.currentUser && (

    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom () {

  const dummy = useRef();
  
  const messagesRef = firestore.collection ('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');

    dummy.current.scrollIntoView
    ({ behavior: 'smooth'});

  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

        <div ref={dummy}></div>

      </main>
      
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </>
  )

}

function ChatMessage(props) {

  const {text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'; 

  return (
  <>
    <div className={`message ${messageClass}`}>
      <img alt="avatar" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>
  
  )
}

export default App;
