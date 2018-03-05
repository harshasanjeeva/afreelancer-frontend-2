import React, { Component } from 'react';
import NavHeader from './NavHeader'
import HomeMain from './HomeMain'
class LandingPage extends Component {
  render() {
    return (
        <div>
         <div className="container-fluid">
         <div className="container-fluid" style={{ marginTop: 20}}>
            
         <div className="row">
         <div className="col-md-2"></div> 
           <div className="col-md-8"><HomeMain /></div> 
           <div className="col-md-2"></div>
         </div>
        </div>  
       </div>     
        </div>
    );
  }
}

export default LandingPage;
