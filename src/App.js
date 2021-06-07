import React, { useEffect, useState } from 'react';
import './App.css'
import Messages from './Messages';
import {FormControl, Input} from '@material-ui/core'
import firebase from 'firebase';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  let [input, setInput] = useState();
  let [username, setUsername] = useState();
  let [messages, setMessages] = useState([])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: username,
      chat: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages, { username: username, data: input }])
    setInput("");
  }

  useEffect(() => {
    setUsername(prompt("Enter your name: "));
  }, [])
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((items)=>({id:items.id, data:items.data()})))
    })
  }, []);
  const deleteAll = () => {
    let ask = window.confirm("Do you want to delete all messages?")
    if (ask) {
      db.collection('messages').get().then((res) => {
        res.forEach(element => {
          element.ref.delete();
        })
      })
    }
    else {
      return;
    }
  }
  console.log(messages);
  return (
    <div className="App">
      <img src="data:image/jpeg;base64,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" onClick={deleteAll} alt=""/>
      <h2>FACEBOOK MESSENGER</h2>
      <p className="app-p-username">Username: {username}<br/>RoomId: 439e839</p>
      <form className="app-form">
        <FormControl className="app-formControl">
          <Input className="app-input-form" type="text" placeholder="Type your message" value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className="app-button-form"
          disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id,data}) => {
           return <Messages key={id} username={username} messageObj={data} />
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
