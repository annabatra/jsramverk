import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './view/Home.js';
import Report from './view/Report.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Router>
            <header className="App-header">
              <Link to="/">Hem</Link>
              <Link to="/reports/week/1">Redovisningstext</Link>
            </header>
          <div class="centerMe">
            <Switch>
              <Route path="/reports/week/1">
                <Report />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
