import React, { Component } from 'react';
import NavHeader from './NavHeader';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,strong} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import NavHeaderLogin from './NavHeaderLogin';
import history from './History'
import { Link } from 'react-router-dom';
import {projectBid} from "../actions/useractions";



class ProjectItemDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "userid":"",
            "projectid":"",
            "bidderid":"",
            "amount":""
          };
      }


  render() {
      console.log("desc-->",this.props.data)
    return (
        <div >
      <NavHeaderLogin />
      <div style={{ backgroundColor:"#c1c0c0", width: "100%", height:"100%",position :"absolute"}}>
        <Card style={{ 
            
         marginTop: "20px",
            width: "700px",
            height:"500px",
            marginLeft: "150px"
}}>


<Container>
<Row>
  <Col><h4>Project Description</h4></Col>
</Row>
<hr />

<Row>
  <Col xs="3"><strong>Project Name</strong></Col>
  </Row>
<Row>
  
  <Col xs="3"> {this.props.data.name} </Col>

</Row>

<br />
<Row>
  <Col xs="3"><strong>Description</strong></Col>
</Row>
<Row>
  <Col xs="7">{this.props.data.details}</Col>
</Row>
<br />

<Row>
  <Col xs="3"><strong>Owner-Id:</strong></Col>
</Row>
<Row>
  <Col xs="4">{this.props.data.user_id}</Col>
</Row>
<br />

<Row>
  <Col xs="3"><strong>Project-Id:</strong></Col>
</Row>
<Row>
  <Col xs="4">{this.props.data.projectid}</Col>
</Row>
<br />




<Row>
  <Col xs="3"><strong>Bid Amount:</strong></Col>
</Row>
<Row>


  <Col xs="3">           <Input type="number" onChange={(event) => {
    console.log("userid==>",this.props.userid);
    this.setState({
      bidderid:this.props.userid,
      projectid:this.props.data.projectid,
      ownerid:this.props.data.user_id,
      amount: event.target.value
    });
    console.log(this.state);
}}/></Col>

</Row>

<br />
<Row >
   <Col xs="3">         
<Button color="success" onClick={() => {
    this.props.bid(this.state);
  }} >Bid Now</Button>
  </Col>
</Row>


</Container>





    </Card>
        </div>
        </div>
    );
  }
}


const mapStateToProps = (user) => {
  console.log("project uitem desc=---->",user)
  if(user.user.user.projectIndividualStatus) {
    const data = user.user.user.projectIndividualDesc;
    const userid = user.user.user.state.user.userid;
    console.log("userid in projectItemDesc----->",userid)
    return {data,userid};
  }
}
    
const mapDispatchToProps = (dispatch) => {
//console.log("dispatch",dispatch)
return {
    bid : (data) => dispatch(projectBid(data))
}
}


  
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(ProjectItemDesc));



