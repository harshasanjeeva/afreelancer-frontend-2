import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Slider from './Slider';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import history from './History';
class Home extends Component {
  render() {
    return (
      <div >
      {!this.props.isLoggedIn ?
        <div>
      <NavHeader />
        <Slider />
        </div>
        : history.push('./profile')  }
      </div>
    );
  }
}
const mapStateToProps = (user) => {
  console.log("user-->",user)
  if(user.user != null) {
    const isLoggedIn = user.user.user.loggedin;
    return {isLoggedIn};
}
}


export default withRouter(connect(mapStateToProps)(Home));
