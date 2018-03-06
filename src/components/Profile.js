import React, { Component } from 'react';
import NavHeader from './NavHeader';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import NavHeaderLogin from './NavHeaderLogin';
import history from './History'
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



callworks(){
history.push('./work')
}


  render() {
      console.log("userrssss",this.props.users)
    return (
        <div >
      
        <Card style={{ 
            
            width: 300,
            margin: 'auto',
            height: 350,
}}>
        <CardImg top width="100%" align="middle" src={require('./image1.png')} alt="Card image cap" style={{ 
            
            width: 150,
            margin: 'auto',
            height: 240,
            borderRadius: 50}}/>
            <hr />
            <CardBody>
            <CardTitle>User Profile Page</CardTitle>
            <Label>Username:</Label><CardSubtitle>{this.props.username}</CardSubtitle>
            <Label>Email:</Label><CardSubtitle>{this.props.email}</CardSubtitle>
            <CardText></CardText>
            </CardBody>
            <br />
            <Button onClick={() => {

                this.callworks();
                
              }} >Go to job postings</Button>
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
          username: user.user.user.username,
          email: user.user.user.email
      };//{msg};
//    }
  }
export default  withRouter(connect(mapStateToProps)(Profile));
