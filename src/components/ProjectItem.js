import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './History';
import { Button} from 'reactstrap';
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
        history.push('/ProjectItemDesc');
       
      }


        console.log("products",products);
      return (     
          <div style={{backgroundColor:"#c1c0c0", width: "100%", height:"100%",position :"absolute" ,paddingTop:"20px"}}>
          <MuiThemeProvider>
          <Card style={{marginLeft: 30, marginRight:30}}>

<Table>
  <TableHeader>
    <TableRow style={{backgroundColor:"grey"}}>

      <TableHeaderColumn style={{color:"white"}}>Project Name</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Project Description</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Project Budget</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Bids</TableHeaderColumn>
      <TableHeaderColumn style={{color:"white"}}>Details</TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>

  {products.map(row => {
      console.log("row",row);

     return <TableRow  >

    <TableRowColumn key={row.name} >{row.name}</TableRowColumn>
    <TableRowColumn key={row.description} >{row.description}</TableRowColumn>
    <TableRowColumn key={row.budget} >{row.budget}</TableRowColumn>
    <TableRowColumn key={row.bids} >{row.bids}</TableRowColumn>
    <TableRowColumn key={row.id}>
          <Button color="success"
              onClick={() => {
                console.log("row===",row.id)

                 this.props.projectDesc({"project_id":row.id})
                
                    }}>Bid Now </Button>
    </TableRowColumn>
    </TableRow>
  })}

  </TableBody>
</Table>

</Card>
</MuiThemeProvider>
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
      if(user.user != null) {
        console.log("im here in mapStateToProps")
        const status = user.user.user.status;
        return {status};
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(ProjectItem);