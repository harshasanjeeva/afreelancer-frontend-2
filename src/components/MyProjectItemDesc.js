import React, { Component } from 'react';
import NavHeader from './NavHeader';
import { Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Fade } from 'reactstrap';
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


class MyProjectItemDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userid:this.props.user_id,
          projectid:this.props.projectid,
          ownername:this.props.username,
          bidwinnername:"",
          bidwinner:"",
          hired:1
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


{this.state.hired?
<MuiThemeProvider>
       

<Table>
<TableHeader displaySelectAll={false}
adjustForCheckbox={false}>
  <TableRow style={{backgroundColor:"grey"}}>

    <TableHeaderColumn style={{color:"white"}}>Freelancer Name</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Bid amount</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Period in days</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Status</TableHeaderColumn>
  </TableRow>
</TableHeader>
<TableBody displayRowCheckbox={false}>

{this.props.data.map(row => {
    console.log("row",row);
   
   
       return <TableRow  >
   
       <TableRowColumn >{row.name}</TableRowColumn>
       <TableRowColumn >{row.amount}</TableRowColumn>
       <TableRowColumn  >{row.period}</TableRowColumn>
       <TableRowColumn >
       <Button color="warning" 
       onClick={() => {
        // console.log("row===",row,row.projectid)
        this.setState({
          // userid:this.props.name,

          hired:0,
          bidwinner:row
        },() => {
          // only now the state was updated
          console.log("Data is here", this.state); 
          this.props.hired(this.state)
       });
 
        //  setTimeout(function(state){
          console.log("this.state--->",this.state)
          console.log("this.stateasdasd--->",row.name)
          console.log("this.stateasdasd--->",row.bidderid)
         
        //  },100);
       
        
        }} >Hire Now!</Button>
       </TableRowColumn>
       
       </TableRow>
   
   }
   )}


</TableBody>
</Table>
</MuiThemeProvider>
:
<div>

<Button color="success"
onClick={() => {

  history.push('/paymentpage');
      }}>Make Payment</Button>
</div>}
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
    hired : (data) => dispatch(hire(data))
  }
}

const mapStateToProps = (user) => {
  console.log("project uitem descasdsfdsfdasd=---->",user.user)
//   if(user.user.user.myprojectIndividualStatus) {
// //     const data = user.user.user.projectIndividualDesc;
// //     const userid = user.user.user.state.userid;
    console.log("user.user in myprojectDescitemmmmm--->",user.user.myuserindiv.myprojectIndividualDesc.data.projectid)
    console.log("user.user in myprojectDescitemmmmm--->",user.user.projectstatus.status.status)
if(user.user.projectstatus){
  if( user.user.projectstatus.status.projectid == user.user.myuserindiv.myprojectIndividualDesc.data.projectid ){
    let status = user.user.projectstatus.status.status;
    console.log("forund projectid-->")
    return{
      //data: user.user.myuserindiv.myprojectIndividualDesc.result,
      //changed on 04/12
      data: user.user.user.bidlist,
      user_id: user.user.user.profile.user_id,
      name: user.user.myuserindiv.myprojectIndividualDesc.data.name,
       details: user.user.myuserindiv.myprojectIndividualDesc.data.details,
       projectid: user.user.myuserindiv.myprojectIndividualDesc.data.projectid,
       ownerid: user.user.myuserindiv.myprojectIndividualDesc.data.user_id,
       username: user.user.myuserindiv.myprojectIndividualDesc.data.username,
       budget: user.user.myuserindiv.myprojectIndividualDesc.data.budget,
       ownerid: user.user.myuserindiv.myprojectIndividualDesc.data.user_id,
        bids: user.user.myuserindiv.myprojectIndividualDesc.data.bids,
        skills: user.user.myuserindiv.myprojectIndividualDesc.data.skills,
        status:!status
  }
  }
}

// }
//status:user.user.projectstatus.status.status

//   }
return{
    //data: user.user.myuserindiv.myprojectIndividualDesc.result,
    //changed on 04/12
    data: user.user.user.bidlist,
    user_id: user.user.user.profile.user_id,
    name: user.user.myuserindiv.myprojectIndividualDesc.data.name,
     details: user.user.myuserindiv.myprojectIndividualDesc.data.details,
     projectid: user.user.myuserindiv.myprojectIndividualDesc.data.projectid,
     ownerid: user.user.myuserindiv.myprojectIndividualDesc.data.user_id,
     username: user.user.myuserindiv.myprojectIndividualDesc.data.username,
     budget: user.user.myuserindiv.myprojectIndividualDesc.data.budget,
     ownerid: user.user.myuserindiv.myprojectIndividualDesc.data.user_id,
      bids: user.user.myuserindiv.myprojectIndividualDesc.data.bids,
      skills: user.user.myuserindiv.myprojectIndividualDesc.data.skills,
      status:1
}
}
    
// const mapDispatchToProps = (dispatch) => {
// //console.log("dispatch",dispatch)
// // return {
// //     bid : (data) => dispatch(projectBid(data))
// // }
// }


  
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(MyProjectItemDesc));



