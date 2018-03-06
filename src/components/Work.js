import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import NavHeader from './NavHeader';
import SearchBar from 'material-ui-search-bar'
class Work extends Component {
  render() {
    return (
      <div >
      <NavHeader />
      
        <h3>Find work</h3>
        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          maxWidth: 800
        }}
      />
        <ProjectItem />
      </div>
    );
  }
}

export default Work;
