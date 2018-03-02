import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Work from './Work';
import Projects from './Projects';
import NavHeader from './Nav'
import Home from './Home';
import {Route, Switch} from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <div >
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/work' component={Work}/>
            <Route path='/projects' component={Projects}/>
        </Switch>
      </div>
    );
  }
}

export default Root;