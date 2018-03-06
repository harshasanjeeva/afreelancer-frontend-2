import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import NavHeader from './NavHeader';
class Work extends Component {
  render() {
    return (
      <div >
      <NavHeader />
        <h3>Find work</h3>
        <ProjectItem />
      </div>
    );
  }
}

export default Work;
