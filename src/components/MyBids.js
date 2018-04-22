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


class MyBids extends Component {
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
      <div style={{ backgroundColor:"rgb(245, 239, 239)", width: "100%", height:"100%",position :"absolute"}}>
        <Card style={{ 
            
         marginTop: "20px",
            width: "700px",
            
            marginLeft: "150px"
}}>
<Container>
<Row>
  <Col><h4>Dashboard</h4></Col>
</Row>
<Row>
  <Col><h6>My bids</h6></Col>
</Row>
<hr />



<br />
<MuiThemeProvider>

<Table>
<TableHeader displaySelectAll={false}
adjustForCheckbox={false}>
  <TableRow style={{backgroundColor:"grey"}}>

    <TableHeaderColumn style={{color:"white"}}>Project Name</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Employer</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Project Budget</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Your Bid</TableHeaderColumn>
    <TableHeaderColumn style={{color:"white"}}>Status</TableHeaderColumn>
  </TableRow>
</TableHeader>
<TableBody displayRowCheckbox={false}>

{this.props.data.map(row => {
    console.log("row",row);
   
    if (row.user_id ==this.props.user_id){
       return <TableRow  >
   
       <TableRowColumn >{row.name}</TableRowColumn>
       <TableRowColumn >{row.username}</TableRowColumn>
       <TableRowColumn  >{row.budget}</TableRowColumn>
       <TableRowColumn >{row.bidamount}</TableRowColumn>
       <TableRowColumn >
       <Button color="info">on Review</Button></TableRowColumn>
       </TableRow>
   
   }}
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
    data: user.user.user.projectList,
    user_id: user.user.user.user_id
    //  name: user.user.user.myprojectIndividualDesc.data.name,
    //  details: user.user.user.myprojectIndividualDesc.data.details,
    //  projectid: user.user.user.myprojectIndividualDesc.data.name,
    //  ownerid: user.user.user.myprojectIndividualDesc.data.name,
}
}
    
// const mapDispatchToProps = (dispatch) => {
// //console.log("dispatch",dispatch)
// // return {
// //     bid : (data) => dispatch(projectBid(data))
// // }
// }


  
export default  withRouter(connect(mapStateToProps)(MyBids));



