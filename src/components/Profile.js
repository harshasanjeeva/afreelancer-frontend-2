import React, { Component } from 'react';
import NavHeader from './NavHeader'
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
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
        <div >
        <NavHeader />
        <Card style={{ 
            
            width: 300,
            margin: 'auto',
            height: 350,
}}>
        <CardImg top width="100%" align="middle" src={require('./image1.png')} alt="Card image cap" style={{ 
            
            width: 150,
            margin: 'auto',
            height: 150,
            borderRadius: 50}}/>
            <hr />
            <CardBody>
            <CardTitle>User Profile Page</CardTitle>
            <CardSubtitle>{this.props.users}</CardSubtitle>
            <CardText></CardText>
            </CardBody>
            <br />
    
        </Card>
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
