import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Slider from './Slider';
import { Route, withRouter } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div >
      <NavHeader />
        <Slider />  
      </div>
    );
  }
}

export default withRouter(Home);
