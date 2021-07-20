import './App.css';
import React from 'react';
import { Router } from '@reach/router'
import HomePage from './components/home';
import People from './components/people';
import Planets from './components/planets';
import Starships from './components/starships';
import Error from './components/error';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
        <Starships path="/starships/:id"/>
        <Error path="/error"/>
      </Router>
    </div>
  );
}

export default App;
