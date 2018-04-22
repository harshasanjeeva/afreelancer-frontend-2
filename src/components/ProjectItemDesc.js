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
            "userid":this.props.userid,
            "projectid":"",
            "bidderid":"",
            "amount":"",
            "biddername":this.props.biddername,
            "period":""
          };
      }


  render() {
      console.log("desc-->",this.props.data)
    return (
        <div >
      <NavHeaderLogin />
      {this.props.expression ? <Alert color="success">{this.props.expression}</Alert> : ''}
      <div style={{ backgroundColor:"rgb(245, 239, 239)", width: "100%", height:"100%",position :"absolute"}}>
        <Card style={{ 
            
         marginTop: "20px",
            width: "700px",
            height:"530px",
            marginLeft: "150px"
}}>


<Container>
<Row>
  <Col><h4>Project Description</h4></Col>
</Row>
<hr />

<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Project Name</strong></Col>
  </Row>
<Row>
  
  <Col xs="3" style={{textAlign:"left"}}> {this.props.data.name} </Col>

</Row>

<br />
<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Description</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.data.details}</Col>
</Row>


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Skills</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.data.skills}</Col>
</Row>



<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Budget Range</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.data.budget}</Col>
</Row>



<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Average Bid</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>8409</Col>
</Row>



<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Employer Id</strong></Col>

  <Col xs="4" style={{textAlign:"left"}}>{this.props.data.user_id}</Col>
</Row>


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Project Id</strong></Col>

  <Col xs="4" style={{textAlign:"left"}}>{this.props.data.projectid}</Col>
</Row>


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Number of Bids</strong></Col>
  <Col xs="4" style={{textAlign:"left"}}>{this.props.data.bids}</Col>
</Row>




<br/>


<Row>
  <Col xs="4" style={{textAlign:"left"}}><strong>Bid Amount:</strong></Col>
</Row>
<Row>
  <Col xs="3" >           <Input type="number" onChange={(event) => {
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



<Row>
  <Col xs="4" style={{textAlign:"left"}}><strong>Period in days:</strong></Col>
</Row>
<Row>
  <Col xs="3" >           <Input type="number" onChange={(event) => {
    console.log("userid==>",this.props.userid);
    this.setState({
      period:event.target.value,

    });
    console.log(this.state);
}}/></Col>

</Row>






<br />
<Row >
   <Col xs="3" style={{textAlign:"left"}}>         
<Button color="success" onClick={() => {
    this.props.bid(this.state);
  }} >Bid Now</Button>
  </Col>
  <Col xs="2">         
  <Button  onClick={() => {
      history.push('/work')
    }} >Cancel</Button>
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
  console.log("project uitem desc=---->",user.user.projectbid.projectbidmessage)
  console.log("project uitem desc=---->",)

  if(user.user.userindiv.projectIndividualStatus) {
    const data = user.user.userindiv.projectIndividualDesc;
   // const userid = user.user.user.state.user.userid;
   const userid = user.user.user.userid;
   const biddername = user.user.user.username;
   const expression = user.user.projectbid.projectbidmessage; 
   console.log("userid in projectItemDesc----->",userid)
    return {data,userid,biddername,expression};
  }
}
    
const mapDispatchToProps = (dispatch) => {
//console.log("dispatch",dispatch)
return {
    bid : (data) => dispatch(projectBid(data))
}
}


  
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(ProjectItemDesc));



