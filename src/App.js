import React from 'react';

import './App.css';
import Home from './view/home.js';
import Reports from './view/reports.js';
import Register from './view/register.js';
import Login from './view/logon.js';
import EditReport from './view/editreport.js';
import Chatfunction from './view/chatfunction.js';



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
              <Link to="/">Hem</Link>|
              <Link to="/reports/week/1">Redovisning</Link>|
              <Link to="/register">Registrera</Link>|
              <Link to="/logon">Logga in</Link>|
              <Link to="/chatfunction">Chatt</Link>
              <Link to="/editreport/1"></Link>
            </header>
          <div class="centerMe">
          <Switch>
            <Route exact strict path="/">
                <Home />
            </Route>
            <Route exact strict path="/reports/week/:id" component={Reports}/>
            <Route exact strict path="/editreport/:id" component={EditReport}/>
            <Route exact strict path="/logon" component={Login}/>
            <Route exact strict path="/register" component={Register}/>
            <Route exact strict path="/chatfunction" component={Chatfunction}/>
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
