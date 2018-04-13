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
import {hire} from "../actions/useractions";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


class CurrentItemDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userid:"",
          projectid:this.props.projectid,
          ownername:this.props.username,
          bidwinnername:"",
          bidwinnerid:""

          };
      }


  render() {
  //   console.log("desc-->",this.props.data)
    return (
        <div>
      <NavHeaderLogin />
      <div style={{ backgroundColor:"#c1c0c0", width: "100%", height:"100%",position :"absolute"}}>
        <Card style={{ 
            
         marginTop: "20px",
            width: "700px",
            
            marginLeft: "150px"
}}>
<Container>
<Row>
  <Col><h4>Project Description</h4></Col>
</Row>
<hr />

<Row >
  <Col xs="3"  style={{textAlign:"left"}}><strong>Project Name</strong></Col>
  
  <Col xs="3"  style={{textAlign:"left"}}> {this.props.name} </Col>

</Row>

<br />


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Description</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.details}</Col>
</Row>


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Skills</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.skills}</Col>
</Row>



<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Budget Range</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.budget}</Col>
</Row>


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Freelancer Name</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>{this.props.username}</Col>
</Row>

<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Average Bid</strong></Col>

  <Col xs="7" style={{textAlign:"left"}}>8409</Col>
</Row>





<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Project Id</strong></Col>

  <Col xs="4" style={{textAlign:"left"}}>{this.props.projectid}</Col>
</Row>


<Row>
  <Col xs="3" style={{textAlign:"left"}}><strong>Number of Bids</strong></Col>
  <Col xs="4" style={{textAlign:"left"}}>{this.props.bids}</Col>
</Row>
<br />
<hr />
<Row>
  <Col><h4>Submit the work now!</h4></Col>
</Row>


<Row>

  <Col>
<Input type="file" name="file" id="exampleFile" onChange={(event) => {
    const payload = new FormData();
  
  payload.append('mypic', event.target.files[0]);  
  console.log("filllle==>",payload)
  
   this.props.upload(payload);
                }} style={{paddingLeft: "10px"}}/>
                </Col>
</Row>


<Row>
  <Col><Button color="success">Submit Now!</Button></Col>
</Row>




















<br />

</Container>
    </Card>
       

        </div>
        </div>
   )
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch",dispatch)
  return {
    hire1 : (data) => dispatch(hire(data))
  }
}

const mapStateToProps = (user) => {
  console.log("project uitem descasdsfdsfdasd=---->",user.user)
//   if(user.user.user.myprojectIndividualStatus) {
// //     const data = user.user.user.projectIndividualDesc;
// //     const userid = user.user.user.state.userid;
//     console.log("user.user in myprojectDescitemmmmm--->")
// //     return {data,userid};
//   }
return{
    //data: user.user.myuserindiv.myprojectIndividualDesc.result,
    //changed on 04/12
    data: user.user.user.bidlist,
    
    name: user.user.myuserindiv.myprojectIndividualDesc.data.name,
     details: user.user.myuserindiv.myprojectIndividualDesc.data.details,
     projectid: user.user.myuserindiv.myprojectIndividualDesc.data.projectid,
     ownerid: user.user.myuserindiv.myprojectIndividualDesc.data.user_id,
     username: user.user.myuserindiv.myprojectIndividualDesc.data.username,
     budget: user.user.myuserindiv.myprojectIndividualDesc.data.budget,
     ownerid: user.user.myuserindiv.myprojectIndividualDesc.data.user_id,
      bids: user.user.myuserindiv.myprojectIndividualDesc.data.bids,
      skills: user.user.myuserindiv.myprojectIndividualDesc.data.skills,
}
}
    
// const mapDispatchToProps = (dispatch) => {
// //console.log("dispatch",dispatch)
// // return {
// //     bid : (data) => dispatch(projectBid(data))
// // }
// }


  
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrentItemDesc));



