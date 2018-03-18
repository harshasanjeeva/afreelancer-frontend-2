import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavHeader from './NavHeader';
import {projectProposal} from "../actions/useractions";
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import history from './History'; 
import NavHeaderLogin from './NavHeaderLogin';





class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "projectName":"",
      "projectDescription":"",
      "projectBudget":"",
      "userid":"",
      "projectid":""
    };

  }


  navigate() {
   //  history.push('/');
   }

   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  render() {
    console.log("userid---->",this.props.userid)
    if(this.props.isLoggedIn){

      console.log("I am here in signin page navigae",this.props.isLoggedIn)
      this.navigate();
    }
    return (
  <div>
  
  <NavHeaderLogin />
      <div className="container-fluid" >
      <Card>
      <CardBody>
      <CardTitle>Tell us what you need done</CardTitle>
      <CardSubtitle>
     </CardSubtitle>
      <CardText style={{marginTop: 20, marginLeft:100,marginRight:50,marginBottom:20}}> Get free quotes from skilled freelancers within minutes, view profiles, ratings and portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</CardText>

   
      <Form style={{marginTop: 30, marginLeft:250,marginRight:200,marginBottom:20}}>
      <FormGroup row>
      <p>Choose a name for your project</p>

          <Input type="text" name="title" id="title" placeholder="e.g. Build me a website" onChange={(event) => {
            console.log(this.state);                
            this.setState({
              projectName: event.target.value
                          });
                        }} />

      </FormGroup>
      
      <FormGroup row>
      <p>Tell us more about your project</p>
        
 
          <Input type="textarea" name="text" id="exampleText" placeholder="Describe your project here..." onChange={(event) => {
            console.log(this.state);                
            this.setState({
              projectDescription: event.target.value
                            });
                        }} />

      </FormGroup>


      <FormGroup row>
      <p>File Upload</p>
        
 
          <Input type="file" name="upload" id="upload" placeholder="Describe your project here..." onChange={(event) => {
  
                        }} />

      </FormGroup>



      <FormGroup row>
      <p>Skills Required</p>
      <Input type="text" name="skills" id="skills" placeholder="e.g. Node.js, Java" onChange={(event) => {

                    }} />

      </FormGroup>



      <FormGroup row>
      <p>Estimated Budget</p>
       <br />
       
          <Input type="number" name="number" id="budget" placeholder="1000 $" onChange={(event) => {
            
            
            console.log(this.state);                
            this.setState({
              projectBudget: event.target.value,
              projectid: this.getRandomInt(100,10000),
              userid: this.props.userid
                            });
                        }} />
        
      </FormGroup>
      
      <FormGroup check row>
        <Col >
          <Button color="primary" onClick={() => {

            this.props.projectSubmit(this.state);
            
          }} >Submit</Button> <span/>
          <Button color="warning" onClick={() => {
            history.push('/work')
            
          }} >Check out other projects</Button>

        </Col>
      </FormGroup>
    </Form>

    </CardBody>
    </Card>
    </div>
    </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  console.log("dispatch",dispatch)
  return {
    projectSubmit : (data) => dispatch(projectProposal(data))
  }
}


const mapStateToProps = (user) => {
  if(user.user != null) {
    const isLoggedIn = user.user.user.loggedin;
    const userid = user.user.user.userid
    return {isLoggedIn,userid};
}
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Projects));
