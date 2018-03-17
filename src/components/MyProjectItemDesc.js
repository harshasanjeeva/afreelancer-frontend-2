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
            "userid":"",
            "projectid":"",
            "bidderid":"",
            "amount":""
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

<Row>
  <Col xs="3"><strong>Project Name</strong></Col>
  </Row>
<Row>
  
  <Col xs="3"> {this.props.name} </Col>

</Row>

<br />
<Row>
  <Col xs="3"><strong>Description</strong></Col>
</Row>
<Row>
  <Col xs="7">{this.props.details}</Col>
</Row>
<br />

<Row>
  <Col xs="3"><strong>Owner-Id:</strong></Col>
</Row>
<Row>
  <Col xs="4">{this.props.user_id}</Col>
</Row>
<br />

<Row>
  <Col xs="3"><strong>Project-Id:</strong></Col>
</Row>
<Row>
  <Col xs="4">{this.props.projectid}</Col>
</Row>
<br />

<br />



<MuiThemeProvider>
       

<Table>
<TableHeader>
  <TableRow style={{backgroundColor:"grey"}}>

    <TableHeaderColumn style={{color:"white"}}>Project Name</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Project Description</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Project Budget</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Bids</TableHeaderColumn>
  </TableRow>
</TableHeader>
<TableBody>

{this.props.data.map(row => {
    console.log("row",row);
   
   
       return <TableRow  >
   
       <TableRowColumn >{row.projectid}</TableRowColumn>
       <TableRowColumn >{row.ownerid}</TableRowColumn>
       <TableRowColumn  >{row.bidderid}</TableRowColumn>
       <TableRowColumn >{row.amount}</TableRowColumn>
       
       </TableRow>
   
   }
   )}


</TableBody>
</Table>
</MuiThemeProvider>
</Container>
    </Card>
       

        </div>
        </div>
   )
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
    data: user.user.user.myprojectIndividualDesc.result,
     name: user.user.user.myprojectIndividualDesc.data.name,
     details: user.user.user.myprojectIndividualDesc.data.details,
     projectid: user.user.user.myprojectIndividualDesc.data.name,
     ownerid: user.user.user.myprojectIndividualDesc.data.name,
}
}
    
// const mapDispatchToProps = (dispatch) => {
// //console.log("dispatch",dispatch)
// // return {
// //     bid : (data) => dispatch(projectBid(data))
// // }
// }


  
export default  withRouter(connect(mapStateToProps)(MyProjectItemDesc));



