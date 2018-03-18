import React, { Component } from 'react';
import NavHeader from './NavHeader';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Row,Col,Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron,Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import NavHeaderLogin from './NavHeaderLogin';
import history from './History'
import { Link } from 'react-router-dom';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "userid": "",

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
      console.log("userrssss",this.props.users)
    return (  <div> 
      {this.props.isLoggedIn ?
        <div>
      <NavHeaderLogin />
        <Jumbotron style={{  width:"60%",marginRight:"2%",float: "left"}}>
          <h1 className="display-3">Hi,{this.props.username}! </h1>
          <p className="lead">Claim 100 Bids for Free
          Get started with a FREE TRIAL for 100 bids and more!</p>
          <hr className="my-2" />
          <p>You are almost ready to start earning money as a freelancer, simply complete the following steps:
         <ul>
         <li>Verify your email</li>
         <li>Update your profile</li>
         <li>Place your first bid</li>
         </ul>
         Be sure to check out our Tips for New Freelancers guide which explains the best way to find work on Freelancer.com</p>
          <p className="lead">
            <Button color="primary" onClick={() => {
                this.callworks();
              }}  >Check out projects</Button>
          </p>
        </Jumbotron>
     
        <Card style={{ 
            
            width: 400,
            margin: 'auto',
            height: 530,
}}>
            <img src={require('./image3.png')} alt="Card image cap" style={{ 
            
                width: 120,
                margin: 'auto',
                marginTop:'10px',
               height: 140,
                borderRadius: 50}}/>
            <hr />
            <CardBody>
            <CardTitle>User Profile</CardTitle>
            <Row>
            <Col xs='5'>
            Username:
            </Col>
            <Col>
            {this.props.username}
            </Col>
            </Row>


            <Row>
            <Col xs='5'>Email:
            </Col>
            <Col>
            {this.props.email}
            </Col>
            </Row>
            

            <Row>
            <Col xs='5'>Skills:
            </Col>
            <Col>
            {this.props.skills}
            </Col>
            </Row>

            <Row>

            <Col ><p style={{color:"#959292"}}>
            {this.props.about}</p>
            </Col>
            </Row>
            </CardBody>
            <br />
            <Button onClick={() => {

                this.callEditProfile();
                
              }} >Edit Profile</Button>
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
      console.log("user on profile page",user.user)
    //   user.user.user.signinmsg = "";
      return {
          username: user.user.user.username,
          email: user.user.user.email,
          userid: user.user.user.userid,
          isLoggedIn: user.user.user.loggedin,
          skills: user.user.user.profile[0].skills,
          about: user.user.user.profile[0].about
      };//{msg};
//    }
  }
export default  withRouter(connect(mapStateToProps)(Profile));
