import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Slider from './Slider';
import { Route, withRouter } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div >
      <NavHeader />
        <h3>Home</h3>
        <div style={{  maxWidth: 700,
          maxHeight: 100}} >
        <Slider />
          </div>
      </div>
    );
  }
}

export default withRouter(Home);
