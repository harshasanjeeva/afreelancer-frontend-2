import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import NavHeader from './NavHeader';
import NavHeaderLogin from './NavHeaderLogin';
import {SearchBar} from 'material-ui-search-bar'
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, withRouter } from 'react-router-dom';


class Work extends Component {
  render() {
    return (
      <div>
      <NavHeaderLogin />
 
        <h4>Home</h4>

        <div>


        <ProjectItem  />
        </div>
      </div>
    );
  }
}

export default withRouter(Work);
