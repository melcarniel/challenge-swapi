import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Result from './components/pages/result/Result';
import SwapiState from './context/swapi/SwapiState'

import './App.css';

const App = () => {
 
  return (
    <SwapiState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </Router>
    </SwapiState>
  );  
}

export default App;
