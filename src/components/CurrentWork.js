import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './History';
import { Button} from 'reactstrap';
import {connect} from 'react-redux';
import NavHeaderLogin from './NavHeaderLogin';
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



class CurrentWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "myprojectIndividualData":""
    };
  }

render() {
  if(this.props.status){
    console.log("Navigation for the project item desc")
    history.push('/CurrentItemDesc');
  }

  if(!this.props.status){ 
    console.log("this.props.projectList",this.props.projectList);
  return (<div>    
    <NavHeaderLogin />     
      <div style={{backgroundColor:"rgb(245, 239, 239)", width: "100%", height:"100%",position :"absolute" ,paddingTop:"20px"}}>
     
  <MuiThemeProvider>
      <Card style={{marginLeft: 30, marginRight:30}}>

<Table>
<TableHeader displaySelectAll={false}
adjustForCheckbox={false}>
<TableRow style={{backgroundColor:"grey"}}>

  <TableHeaderColumn style={{color:"white",paddingRight:"0px"}}>Project Name</TableHeaderColumn>
  <TableHeaderColumn style={{color:"white",paddingLeft:"0px",paddingRight:"0px"}}>Project Description</TableHeaderColumn>
  <TableHeaderColumn style={{color:"white"}}>Project Budget</TableHeaderColumn>

  <TableHeaderColumn style={{color:"white"}}>Details</TableHeaderColumn>
</TableRow>
</TableHeader>
<TableBody  displayRowCheckbox={false}>

{this.props.projectList.map(row => {
console.log("row",row);
if (row.user_id ==this.props.user_id){
return(

    <TableRow  >
 <TableRowColumn key={row.name} style={{paddingRight:"0px"}}>{row.name}</TableRowColumn>
 <TableRowColumn key={row.details} style={{paddingLeft:"0px",paddingRight:"0px"}}>{row.details}</TableRowColumn>
 <TableRowColumn key={row.budget} >{row.budget}</TableRowColumn>

 <TableRowColumn key={row.projectid}>
       <Button color="success"
           onClick={() => {
             console.log("row===",row,row.projectid)
             this.setState({
               myprojectIndividualData:row
             });
            // console.log("this.state--->",this.state)
              this.props.projectDesc(row);
            //  this.props.status = true
             history.push('/CurrentItemDesc');
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
        console.log("im here in mapStateToProps in my project item",user)
      if(user.user != null) {
       const status = false
       // const status =  user.user.myuserindiv.myprojectIndividualStatus;
        const projectList = user.user.user.projectList;
        var user_id = user.user.user.profile.user_id
        // user_id = 1;
        return {status, projectList,user_id};
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(CurrentWork);


