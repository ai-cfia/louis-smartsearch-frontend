import './App.css';
import Home from './pages/home/Home.js';
import SearchPage from './pages/search/SearchPage.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
