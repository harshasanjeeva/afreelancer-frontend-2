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
      
        <h3>Find work</h3>
        <hr />
        <Form>
        <FormGroup row>
        <Label for="exampleSearch" style={{marginLeft:150}}>Search</Label>
        <Col>
        <Input type="search" name="search" id="exampleSearch" placeholder="search projects" style={{width:400}} />
        </Col>
      </FormGroup>
      </Form>
<hr />
        <ProjectItem />
      </div>
    );
  }
}

export default withRouter(Work);
