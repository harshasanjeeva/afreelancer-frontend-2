import React, { Component } from 'react';
import NavHeader from './NavHeader'
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Profile extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   modal: false,
        //   "email":"",
        //   "password":""
        // };
    
        // this.toggle = this.toggle.bind(this);
      }

  render() {
      console.log("userrssss",this.props.users)
    return (
        <div className="App">
        <NavHeader />
        <div >
        <img src={require('./image1.png')} alt="avatar" style={{ 
            width: 150,
            height: 150,
            borderRadius: 50}}/>
            <br />
            <span>Hello</span>
            <br />
            <Label>Name: </Label><h4>{this.props.users}</h4>
        </div>
        </div>
    );
  }
}
const mapStateToProps = (user) => {
    // if(user.user != null) {
    //    const isLoggedIn = user.user.user.loggedin;
    //   const msg = user.user.user.basic;
      
    //   user.user.user.signinmsg = "";
      return {
          users: user.user.user.pinfo
      };//{msg};
//    }
  }
export default connect(mapStateToProps)(Profile);
