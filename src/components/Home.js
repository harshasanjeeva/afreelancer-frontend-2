import React, { Component } from 'react';
import NavHeader from './NavHeader'
import Slider from './Slider'
class Home extends Component {
  render() {
    return (
      <div >
      <NavHeader />
        <h3>Home</h3>
        <Slider />
      </div>
    );
  }
}

export default Home;
