import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './History';
import { Button} from 'reactstrap';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {myprojectDesc} from "../actions/useractions";
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
//injectTapEventPlugin();


  

  
//   const ProjectItem = ({products}) = (    console.log("products",products[0]) );

class MyProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "myprojectIndividualData":""
    };
  }
//  TableRow1 = ({row}) => (
//         <TableRow>
//         <TableRowColumn key={row.name}>{row.name}</TableRowColumn>
//         <TableRowColumn key={row.id}>{row.id}</TableRowColumn>
//         <TableRowColumn key={row.price}>{row.price}</TableRowColumn>
//       </TableRow>
//       )
// handleOnClick = () => {
//   // since our views are dependent on `haveData` and `fetching`, we can just set those to false

// }

    render() {
      if(this.props.status){
        console.log("Navigation for the project item desc")
        history.push('/MyProjectItemDesc');
       
      }

      if(!this.props.status){ 
        console.log("this.props.projectList",this.props.projectList);
      return (   
          <div style={{backgroundColor:"rgb(245, 239, 239)", width: "100%", height:"100%",position :"absolute" ,paddingTop:"20px"}}>
          <MuiThemeProvider>
          <Card style={{marginLeft: 30, marginRight:30}}>

<Table>
  <TableHeader>
    <TableRow style={{backgroundColor:"grey"}}>

      <TableHeaderColumn style={{color:"white"}}>Project Name</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Project Description</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Project Budget</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Number of Bids</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Details</TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>

  {this.props.projectList.map(row => {
    console.log("row",row);
if (row.user_id ==11){
    return(
  
        <TableRow  >
     <TableRowColumn key={row.name} >{row.name}</TableRowColumn>
     <TableRowColumn key={row.details} >{row.details}</TableRowColumn>
     <TableRowColumn key={row.budget} >{row.budget}</TableRowColumn>
     <TableRowColumn key={row.user_id} >-</TableRowColumn>
     <TableRowColumn key={row.projectid}>
           <Button color="success"
               onClick={() => {
                 console.log("row===",row,row.projectid)
                 this.setState({
                   myprojectIndividualData:row
                 });
                // console.log("this.state--->",this.state)
                  this.props.projectDesc(row)
               //   history.push('/MyProjectItemDesc');
                     }}>Details </Button>
     </TableRowColumn>
     </TableRow> )
}



  })}


  </TableBody>
</Table>

</Card>
</MuiThemeProvider>
</div>
 )}else{
     return null
 }}
    }
    
    const mapDispatchToProps = (dispatch) => {
      console.log("dispatch",dispatch)
      return {
        projectDesc : (data) => dispatch(myprojectDesc(data))
      }
    }



    const mapStateToProps = (user) => {
        console.log("im here in mapStateToProps in my project item",)
      if(user.user != null) {
       
        const status =  user.user.user.myprojectIndividualStatus;
        const projectList = user.user.user.projectList;
        return {status, projectList};
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(MyProjectItem);


