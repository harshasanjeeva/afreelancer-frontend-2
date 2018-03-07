import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Slider from './Slider';
import { Route, withRouter } from 'react-router-dom';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signout extends Component {
  render() {
    return (
      <div >
      
      <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>

      </div>
    );
  }
}

export default withRouter(Signout);
