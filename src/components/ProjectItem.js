import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
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
    

    render() {

        console.log("products",products);
      return (     
          <div>
          <MuiThemeProvider>
          <Card>

<Table>
  <TableHeader>
    <TableRow>
      <TableHeaderColumn style={{width:5}}>ID</TableHeaderColumn>
      <TableHeaderColumn >Project Name</TableHeaderColumn>
      <TableHeaderColumn >Project Description</TableHeaderColumn>
      <TableHeaderColumn >Project Budget</TableHeaderColumn>
      <TableHeaderColumn style={{width:5}}>Bids</TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>

  {products.map(row => {
      console.log("row",row);
     return <TableRow>
      
    <TableRowColumn key={row.name} style={{width:5}}>{row.id}</TableRowColumn>
    <TableRowColumn key={row.id} >{row.name}</TableRowColumn>
    <TableRowColumn key={row.price} >{row.description}</TableRowColumn>
    <TableRowColumn key={row.price} >{row.budget}</TableRowColumn>
    <TableRowColumn key={row.price} style={{width:5}}>{row.bids}</TableRowColumn>
    </TableRow>
  })}

  </TableBody>
</Table>

</Card>
</MuiThemeProvider>
</div>
      )}
    }
    

/* 


<ul>
{products.map(function(product, i){
  return <li key={i}>{product.name}</li>
})}
</ul>


    <MuiThemeProvider>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
      {products.map(row => {
        <TableRow1 row={row} />
      })}
      </TableBody>
    </Table>
    </MuiThemeProvider>

*/



// const ProjectItem = () => (
//     <MuiThemeProvider>
//   <Table>
//     <TableHeader>
//       <TableRow>
//         <TableHeaderColumn>ID</TableHeaderColumn>
//         <TableHeaderColumn>Name</TableHeaderColumn>
//         <TableHeaderColumn>Status</TableHeaderColumn>
//       </TableRow>
//     </TableHeader>
//     <TableBody>
//       <TableRow>
//         <TableRowColumn>1</TableRowColumn>
//         <TableRowColumn>John Smith</TableRowColumn>
//         <TableRowColumn>Employed</TableRowColumn>
//       </TableRow>
//     </TableBody>
//   </Table>
//   </MuiThemeProvider>
// );

const mapStateToProps = (user) => {

      return {
          username: user.user.user.username,
          email: user.user.user.email
      };//{msg};
//    }
  }
export default ProjectItem;