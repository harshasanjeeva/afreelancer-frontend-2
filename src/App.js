import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import Root from './components/Root';
import './App.css';

//import Button from 'react-bootstrap/lib/Button';
import history from '../src/components/History';
import Home from '../src/components/Home';
import MyProjectItemDesc from '../src/components/MyProjectItemDesc';
import Work from '../src/components/Work';
import Projects from '../src/components/Projects';
import LandingPage from '../src/components/LandingPage';
import {Route, Switch} from 'react-router-dom';
import Profile from '../src/components/Profile';
import {withRouter } from 'react-router-dom';
import ProjectItemDesc from '../src/components/ProjectItemDesc';
import MyProjects from '../src/components/MyProjects';
import MyBids from '../src/components/MyBids';
import EditProfile from '../src/components/EditProfile';
import CurrentWork from '../src/components/CurrentWork';
import CurrentItemDesc from '../src/components/CurrentItemDesc';
import paymentpage from '../src/components/PaymentPage';



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
      <Route exact path='/ProjectItemDesc' component={ProjectItemDesc}/>
      <Route exact path='/MyProjectItemDesc' component={MyProjectItemDesc}/>
      <Route exact path='/myprojects' component={MyProjects}/>
      <Route exact path='/mybids' component={MyBids}/>
      <Route exact path='/editprofile' component={EditProfile}/>
      <Route exact path='/currentwork' component={CurrentWork}/>
      <Route exact path='/CurrentItemDesc' component={CurrentItemDesc}/>
      <Route exact path='/paymentpage' component={paymentpage}/>
      
      </Switch>
      </Router>
      </div>
    );
  }
}

export default (App);
