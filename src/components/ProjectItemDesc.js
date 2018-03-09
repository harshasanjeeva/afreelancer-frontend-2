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
            "amount":""
          };
      }


  render() {
      console.log("desc",this.props.desc)
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
  
  <Col xs="3"> {this.props.desc.name} </Col>

</Row>

<br />
<Row>
  <Col xs="3"><strong>Description</strong></Col>
</Row>
<Row>
  <Col xs="7">{this.props.desc.details}</Col>
</Row>
<br />
<Row>
  <Col xs="3"><strong>Bid Amount:</strong></Col>
</Row>
<Row>


  <Col xs="3">           <Input type="number" onChange={(event) => {
    console.log(this.state);
    this.setState({
        amount: event.target.value
    }); 
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

        desc:{
            name:"website"
            details:"s a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
    return {
          
          desc:{
            name:"website",
            details:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
      };//{msg};
    }
const mapDispatchToProps = (dispatch) => {
console.log("dispatch",dispatch)
return {
    bid : (data) => dispatch(projectBid(data))
}
}


  
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(ProjectItemDesc));