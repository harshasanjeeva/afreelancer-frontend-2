import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import {userSignup} from "../actions/useractions";
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import history from './History';
class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      "email":"",
      "username":"",
      "password":"",
      "isLoggedIn":""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      "email":"",
      "username":"",
      "password":"",
      "signupafter":false
    });
  }
  // navigate() {  



  // }

  render() {
    const dispatch = this.props.dispatch;
    // if(this.props.isLoggedIn){
    //   console.log("came here")
    //   this.navigate();
    // }

    return (
      <div>
        <Button outline color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalBody>
        
          {this.props.expression ? <Alert color="success">{this.props.expression}</Alert> : ''}
            <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="semail" id="semail" placeholder="Email" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                                        email: event.target.value
                                    });
                                }} />
                </FormGroup>
                <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" placeholder="Username" onChange={(event) => {
                  console.log(this.state);                
                  this.setState({
                                      username: event.target.value
                                  });
                              }} />
              </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="spassword" id="spassword" placeholder="Password"  onChange={(event) => {
                                    console.log(this.state);
                                    this.setState({
                                        password: event.target.value
                                    });
                                }} />
                </FormGroup>
                
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {

              this.props.signup(this.state);
              
            }} >Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
    
//   return {
//         signin : (data) => dispatch(userSignin(data))
//     };
// }


const mapDispatchToProps = (dispatch) => {
  console.log("dispatch",dispatch)
  return {
    signup : (data) => dispatch(userSignup(data))
  }
}
const mapStateToProps = (user) => {
    if(user.user != null) {
      console.log(user)
      const isLoggedIn = user.user.user.signupafter;
        const expression = user.user.user.signupmsg;
        console.log(expression);
        user.user.user.signupmsg = "";
        return {expression,isLoggedIn};
    }
}
// function mapStateToProps(user) {
//   if(user.user != null) {
//       const isLoggedIn = user.user.user.loggedin;
//       const msg = user.user.user.signinmsg;
//       user.user.user.signinmsg = "";
//       return {isLoggedIn, msg};
//   }
    
// }

//const StartContainer = connect(mapStateToProp s,mapDispatchToProps)(Signin);
export default connect(mapStateToProps,mapDispatchToProps)(Signup);

//export default (Signup);