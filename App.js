import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Superbad from './pages/Superbad'
import PineappleExpress from './pages/Pineappleexpress'
import Hangover from './pages/Hangover'
import Borat from './pages/Borat'
import Simpsons from './pages/Simpsons'
import Grudge from './pages/Grudge'
import It from './pages/It'
import TheRing from './pages/Ring'
import Pa from './pages/Paranormalactivity'
import JeepersCreepers from './pages/Jc'



import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/superbad" component={Superbad}/>
            <Route path="/pineappleexpress" component={PineappleExpress}/>
            <Route path="/hangover" component={Hangover}/>
            <Route path="/borat" component={Borat}/>
            <Route path="/simpsons" component={Simpsons}/>
            <Route path="/grudge" component={Grudge}/>
            <Route path="/it" component={It}/>
            <Route path="/ring" component={TheRing}/>
            <Route path="/paranormalactivity" component={Pa}/>
            <Route path="/jeeperscreepers" component={JeepersCreepers}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
