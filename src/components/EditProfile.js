import React, { Component } from 'react';
import NavHeader from './NavHeader';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Row,Col,Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron,Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import NavHeaderLogin from './NavHeaderLogin';
import history from './History'
import { Link } from 'react-router-dom';
import {editProfile} from "../actions/useractions";
import {fileUpload} from "../actions/useractions";
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "name": this.props.name,
          "email":this.props.email,
          "phone":this.props.phone,
          "about":this.props.about,
          "skills":this.props.skills,
          "userid":this.props.userid,
          "file":""
        };
    
        // this.toggle = this.toggle.bind(this);
      }



callworks(){
   // window.location.href = "http://localhost:3000/work"
   history.push('/projects');
}

callEditProfile(){
  // window.location.href = "http://localhost:3000/work"
  history.push('/editprofile');
}
  render() {
      console.log("userrssss",this.props.username)
    return (  <div> 
      {this.props.isLoggedIn ?
        <div>
      <NavHeaderLogin />

        <Card style={{ 
            
            width: 500,
            margin: 'auto',
            height: 400,
}}>
<FormGroup>
<Label for="exampleFile">File</Label>
<Input type="file" name="file" id="exampleFile" onChange={(event) => {
  const payload = new FormData();

payload.append('mypic', event.target.files[0]);  
console.log("filllle==>",payload)

 this.props.upload(payload);
              }}/>
<FormText color="muted">
  This is some placeholder block-level help text for the above input.
  It's a bit lighter and easily wraps to a new line.
</FormText>
</FormGroup>
            <hr />
            <CardBody>
            <CardTitle>User Profile Page</CardTitle>

            <Form>
                <FormGroup row>
                
                  <Label for="name">Name</Label>
                  <Col>
                  <Input type="name" name="name" id="name" value={this.state.name} placeholder="Name" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             name: event.target.value
                                    });
                                }} />
</Col>
                </FormGroup>


                <FormGroup row>
                
                  <Label for="email">Email</Label>
                  <Col>
                  <Input type="email" name="semail" id="semail" value={this.state.email} placeholder="Email" onChange={(event) => {
                    console.log(this.state);                
                    this.setState({
                             email: event.target.value
                                    });
                                }} />
                       </Col>         
                </FormGroup>



                <FormGroup row>
            
                <Label for="phone">Phone</Label>
                <Col>
                <Input type="number" name="number" id="number" value={this.state.phone} placeholder="Phone" onChange={(event) => {
                  console.log(this.state);                
                  this.setState({
                           phone: event.target.value
                                  });
                              }} />
                              </Col>
              </FormGroup>

              <FormGroup row>
              <Label for="about">About me</Label>
              <Col>
              <Input type="textarea" name="about" id="about" value={this.state.about} placeholder="About" onChange={(event) => {
                console.log(this.state);                
                this.setState({
                         about: event.target.value
                                });
                            }} />
                            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="skills">Skills</Label>

            <Input type="text" name="skills" id="skills" value={this.state.skills} placeholder="Skills" onChange={(event) => {
              console.log(this.state);                
              this.setState({
                       skills: event.target.value
                              });
                          }} />
          </FormGroup>

            </Form>
      

                <Button color="primary" onClick={() => {

                    this.props.signin(this.state);
                    
                  }} >Save</Button>{' '}
                  <Button color="secondary" onClick={() => {

                    this.callworks();
                    
                  }}>Cancel</Button>
            
            </CardBody>
        </Card>
</div>
        : history.push('/')}
        </div>
    )
  }
}
const mapStateToProps = (user) => {
    // if(user.user != null) {
    //    const isLoggedIn = user.user.user.loggedin;
    //   const msg = user.user.user.basic;
      
    //   user.user.user.signinmsg = "";
    console.log("---->",user.user.user.profile[0])
      return {
         name: user.user.user.profile[0].name,
          email: user.user.user.profile[0].email,
          userid: user.user.user.userid,
          isLoggedIn: user.user.user.loggedin,
          phone: user.user.user.profile[0].phone,
          about: user.user.user.profile[0].about,
          skills: user.user.user.profile[0].skills
          //username:user.user.user.profile.name,

      };//{msg};
//    }
  }

  const mapDispatchToProps = (dispatch) => {
    console.log("dispatch",dispatch)
    return {
      upload : (data) => dispatch(fileUpload(data)),
      signin : (data) => dispatch(editProfile(data))
    }
  }


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(EditProfile));
