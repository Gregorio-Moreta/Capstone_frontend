import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SingleQuote from './pages/SingleQuote';
import AllQuotes from './components/AllQuotes';
import Form from './components/Form';
import Quote from './components/Quote'

function App(props) {

// State and other variables

// Api url
const url = 'https://ruby-api-stoic-quotes.herokuapp.com/greeks/'

const [messages, setMessages] = useState([])

const nullMessage = {
  author: "",
  message: "",
}

const [ targetMessage, setTargetMessage ] = useState(nullMessage)

// Functions
const getMessages = async() => {
  const response = await fetch(url)
  const data = await response.json()
  setMessages(data)
}

const addMessages = async (newMessage) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessage),
  })
  getMessages()
}

const getTargetMessage = (message) => {
  setTargetMessage(message)
  props.history.push('/edit')
}

const updateMessage = async (message) => {
  const response = await fetch(url + message.id + '/', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message)
  })
  getMessages()
}

const deleteMessage = async (message) => {
  const response = await fetch(url + message.id + '/', {
    method: 'DELETE',
  })

  getMessages()
  props.history.push('/')
}

// useEffects
useEffect(() => {
  getMessages()
}, [])

// returnedJSX
  return (
    <div className="App">
      <Link to='/new'><button>Make a new message</button></Link>
      <Switch>
        <Route
            exact
            path="/"
            render={(routerProps) => { 
            return <Dashboard 
            {...routerProps} 
            messages={messages} 
        />
          }}
          />
        <Route 
          path="/message/:id"
          render={(routerProps) => {
            return <SingleQuote 
            {...routerProps}
            messages={messages} 
            handleSubmit={addMessages}
            edit={getTargetMessage}
            deleteMessage={deleteMessage}
        />
          }}
        />
        <Route 
          path='/new'
          render={(routerProps) => 
          <Form 
            {...routerProps}
            initialMessage={nullMessage}
            handleSubmit={addMessages}
            buttonLabel="create message"
          />
          } 
        />
        <Route 
          path='/edit'
          render={(routerProps) => (
            <Form
              {...routerProps} 
              initialMessage={targetMessage}
              handleSubmit={updateMessage}
              buttonLabel='update message'
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
