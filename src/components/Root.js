import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Work from './Work';
import Projects from './Projects';
import Home from './Home';
import Signin from './Signin';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage'
import Profile from './Profile'
import history from './History'
import {withRouter } from 'react-router-dom';
import {Router} from 'react-router-dom';
class Root extends Component {
  render() {
    return (
      <div >
      </div>
    );
  }
}


        // <Switch>
        //     <Route exact path='/' component={Home}/>
        //     <Route path='/work' component={Work}/>
        //     <Route path='/projects' component={Projects}/>
        //     <Route path='/Signin' component={Signin}/>
        // </Switch>
export default (Root);