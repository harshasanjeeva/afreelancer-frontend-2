import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './History';
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {projectDesc} from "../actions/useractions";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';



// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const products = [{
    name: "Website",
    description: "Build a application similar to facebook",
    budget:1000,
    bids:5,
    id: 1
  }, {
    name: "Mobile Application",
    description: "Build whatsapp chatapplication",
    budget:2000,
    bids:15,
    id: 2
  }, {
    name: "iOS",
    description: "App deployment",
    budget:200,
    bids:5,
    id: 3
  }];
  

  
//   const ProjectItem = ({products}) = (    console.log("products",products[0]) );

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "projectIndividualData":"",
      "search":"",
      "currentlydis":this.props.projectList,
      "currentPage": 1,
      "todosPerPage": 10,
      "todos":['a','b','c','d']
    };
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }






onInputChange(event){

  // let newDisplay = _.filter(this.props.projectList,project=>project.skills.includes(event.target.value.toLowerCase()));
  let newDisplay = this.props.projectList.filter(project=>project.skills.includes(event.target.value.toLowerCase()));
  
  
  this.setState({
    search:event.target.value,
    currentlydis: newDisplay
  });

  console.log("search-->",this.state)
}



    render() {
      const todos = this.state.currentlydis;
      const   currentPage  = this.state.currentPage;
      const   todosPerPage  = this.state.todosPerPage;
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      // const indexOfLastTodo = 2;
      // const indexOfFirstTodo = 1;

      console.log("indexOfLastTodo==>",indexOfLastTodo)
      console.log("indexOfFirstTodo==>",this.state.todos)
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);


      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });


      if(this.props.status){
        console.log("Navigation for the project item desc")
        history.push('/ProjectItemDesc');
       
      }


        console.log("this.props.projectList",this.props.projectList);
      return (     
        <div>
        <hr/>
        <Form>
        <FormGroup row>
        
        <h6 for="exampleSearch" style={{marginLeft:150}}>Search</h6>
        <Col>
        <Input type="search" name="search" id="exampleSearch" placeholder="search projects" style={{width:400}} onChange={(event) => {
          
          let newDisplay = this.props.projectList.filter(project=>project.skills.includes(event.target.value));
  // console.log("filter=======>",this.props.projectList.filter(project=>project.skills.includes("Java")));
  
          this.setState({
            search:event.target.value,
            currentlydis: newDisplay
          });
        
          console.log("search-->",this.state)
                      
        }}/>
        </Col>
        <Col>
        <Button    

        onClick={() => {
          var arr = this.props.projectList;
        arr.sort(function(a, b) {
            return parseFloat(a.budget) - parseFloat(b.budget);
        });
  // console.log("filter=======>",this.props.projectList.filter(project=>project.skills.includes("Java")));
  
          this.setState({
            
            currentlydis: arr
          });
        
          console.log("search-->",this.state)
                      
        }}
        
        >Sort /\</Button>

        <Button    
style={{"marginLeft":"10px"}}
        onClick={() => {
          var arr = this.props.projectList;
        arr.sort(function(a, b) {
            return parseFloat(b.budget) - parseFloat(a.budget);
        });
  // console.log("filter=======>",this.props.projectList.filter(project=>project.skills.includes("Java")));
  
          this.setState({
            
            currentlydis: arr
          });
        
          console.log("search-->",this.state)
                      
        }}
        
        >Sort \/</Button>


        </Col>
        </FormGroup>
        </Form>
          <div style={{backgroundColor:"rgb(245, 239, 239)", width: "100%", height:"100%",position :"absolute" ,paddingTop:"20px"}}>
          <MuiThemeProvider>
          <Card style={{marginLeft: 30, marginRight:30}}>
<Table>
  <TableHeader displaySelectAll={false}
  adjustForCheckbox={false}>
    <TableRow style={{backgroundColor:"grey"}}>
      <TableHeaderColumn style={{color:"white",paddingRight:"0px"}}>Project Name</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white",paddingLeft:"0px",paddingRight:"0px"}}>Project Description</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Skills</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Employer</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Project Budget</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Bids</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Details</TableHeaderColumn>
    </TableRow>

  </TableHeader>
  <TableBody displayRowCheckbox={false}>
  {  currentTodos.map((row) => {
    console.log("row",row);
   
   
   
    return <TableRow  >
  <TableRowColumn key={row.name} style={{paddingRight:"0px"}}>{row.name}</TableRowColumn>
  <TableRowColumn key={row.details} style={{paddingLeft:"0px",paddingRight:"0px"}}>{row.details}</TableRowColumn>
  <TableRowColumn key={row.details} >{row.skills}</TableRowColumn>
  <TableRowColumn key={row.details} >{row.username}</TableRowColumn>
  <TableRowColumn key={row.budget} >{row.budget}</TableRowColumn>
  <TableRowColumn key={row.bids} >{row.bids}</TableRowColumn>
  <TableRowColumn key={row.projectid}>
        <Button color="warning"
            onClick={() => {
              console.log("row===",row,row.projectid)
              this.setState({
                projectIndividualData:row
              });
              console.log("this.state--->",this.state)
               this.props.projectDesc(row)
               history.push('/ProjectItemDesc');
                  }}>Bid Now </Button>
  </TableRowColumn>
  </TableRow>
  })}


  </TableBody>
</Table>
<ul id="page-numbers">
{renderPageNumbers}
</ul>
</Card>
</MuiThemeProvider>
</div>

</div>
      )}
    }
    
    const mapDispatchToProps = (dispatch) => {
      console.log("dispatch",dispatch)
      return {
        projectDesc : (data) => dispatch(projectDesc(data))
      }
    }



    const mapStateToProps = (user) => {
      console.log("user->user",user)
      if(user.user != null) {
        console.log("im here in mapStateToProps")
        const status = user.user.user.status;
      
        const projectList = user.user.user.projectList;
        return {status, projectList};
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(ProjectItem);


