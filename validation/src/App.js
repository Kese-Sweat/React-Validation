import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Success from './Success'

function App() {
  return (
    <div>
      <Router>
        
        <Route path='/' exact component={Form}/>
        <Route path= '/Success' component ={Success}/>
      </Router>
    </div>
  );
}

export default App;
