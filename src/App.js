import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import Root from './components/Root';
import './App.css';
import { Button } from 'reactstrap';
import history from '../src/components/History';
import Home from '../src/components/Home';
import Work from '../src/components/Work';
import Projects from '../src/components/Projects';
import LandingPage from '../src/components/LandingPage';
import {Route, Switch} from 'react-router-dom';
import Profile from '../src/components/Profile';
import {withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history = {history}>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/work' render={() => (
        <div>
           <Work />
        </div>
    )} />  
      <Route path='/projects' component={Projects}/>
      <Route exact path='/landingpage' component={LandingPage}/>
      <Route exact path='/profile' component={Profile}/>
  </Switch>
      </Router>
      </div>
    );
  }
}

export default (App);
