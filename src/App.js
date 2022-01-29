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
const url = 'https://ruby-api-stoic-quotes.herokuapp.com/quotes/'

const [quotes, setQuotes] = useState([])

const nullQuote = {
  author: "",
  quote: "",
}

// Functions
const getQuotes = async() => {
  const response = await fetch(url)
  const data = await response.json()
  setQuotes(data)
}

const addQuotes = async (newQuote) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newQuote),
  })
  getQuotes()
}

// useEffects
useEffect(() => {
  getQuotes()
}, [])

// returnedJSX
  return (
    <div className="App">
      <Link to='/new'><button>Make a new quote</button></Link>
      <Switch>
        <Route
            exact
            path="/"
            render={(routerProps) => { 
            return <Dashboard {...routerProps} quotes={quotes} />
          }}
          />
        <Route 
          path="/quote/:id"
          render={(routerProps) => {
            return <SingleQuote {...routerProps}
            quotes={quotes} 
            handleSubmit={addQuotes}

            />
          }}
        />
        <Route 
          path='/new'
          render={(routerProps) => 
          <Form 
            {...routerProps}
            initialQuote={nullQuote}
            handleSubmit={addQuotes}
            buttonLabel="create quote"
          />
          } 
        />
      </Switch>
    </div>
  );
}

export default App;
