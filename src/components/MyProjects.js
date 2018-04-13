import React, { Component } from 'react';
import MyProjectItem from './MyProjectItem'
import NavHeader from './NavHeader';
import NavHeaderLogin from './NavHeaderLogin';
import {SearchBar} from 'material-ui-search-bar'
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, withRouter } from 'react-router-dom';


class MyProjects extends Component {
  render() {
    return (<div>
      <NavHeaderLogin />

        <h4>Dashboard</h4>
        <h6>My Projects</h6>

        <div>
        <Form>
        <FormGroup row>
        
        <Label for="exampleSearch" style={{marginLeft:150}}>Search</Label>
        <Col>
        <Input type="search" name="search" id="exampleSearch" placeholder="Enter project id, name, etc." style={{width:400}} />
        </Col>
        
        </FormGroup>
        </Form>

        <MyProjectItem  />
        </div>
      </div>
    );
  }
}

export default withRouter(MyProjects);