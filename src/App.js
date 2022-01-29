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

const nullMessages = {
  author: "",
  message: "",
}

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
            return <Dashboard {...routerProps} messages={messages} />
          }}
          />
        <Route 
          path="/message/:id"
          render={(routerProps) => {
            return <SingleQuote {...routerProps}
            messages={messages} 
            handleSubmit={addMessages}

            />
          }}
        />
        <Route 
          path='/new'
          render={(routerProps) => 
          <Form 
            {...routerProps}
            initialQuote={nullMessages}
            handleSubmit={addMessages}
            buttonLabel="create message"
          />
          } 
        />
      </Switch>
    </div>
  );
}

export default App;
