import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import Root from './components/Root';
import './App.css';
import { Button } from 'reactstrap';
import history from '../src/components/History';
import Home from '../src/components/Home';
import Work from '../src/components/Work';
import Projects from '../src/components/Projects';
import {Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history = {history}>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/work' component={Work}/>
        <Route path='/projects' component={Projects}/>
    </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
