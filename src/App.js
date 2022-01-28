import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AllQuotes from './components/AllQuotes';
import Form from './components/Form';
import Quote from './components/Quote'

function App(props) {

// State and other variables

// Api url
const url = 'https://ruby-api-stoic-quotes.herokuapp.com/quotes/'

const [quotes, setQuotes] = useState([])

// Functions
const getQuotes = async() => {
  const response = await fetch(url)
  const data = await response.json()
  setQuotes(data)
}


// useEffects
useEffect(() => {
  getQuotes()
}, [])

// returnedJSX
  return (
    <div className="App">
      <Switch>
        <Route
            path="/"
            render={(routerProps) => { 
            <Dashboard {...routerProps} quotes={quotes} />
          }}
          />
        {/* <Route 
          path="/Favorites"
          render={(routerProps) => {
            return <AllQuotes {...routerProps}  />
          }}
        />
        <Route /> */}
      </Switch>
    </div>
  );
}

export default App;
