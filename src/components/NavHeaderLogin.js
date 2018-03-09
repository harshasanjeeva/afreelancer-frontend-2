import React, { Component } from 'react';
import {Navbar, Nav,NavItem, Button, Collapse,  NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand,  NavLink } from 'reactstrap';

import { Route, withRouter } from 'react-router-dom';
// import text from './../images/1.svg';
// import logo from './../images/2.svg';
import Sigin from './Signin'
import Signup from './Signup'
import Home from './Home';
import Work from './Work';
import Projects from './Projects';
import Signout from './Signout';
import {connect} from 'react-redux';

class NavHeaderLogin extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    return (
      <Navbar light expand="md">


      <NavbarBrand href="/">
      <img src={require('./image2.png')} width="110" height="30" alt="" />
      
      </NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink href="/projects/">Hire Post Project</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/work/">Work</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/projects/">Know More</NavLink>
        </NavItem>
        </Nav>
        
        <NavbarToggler onClick={this.toggle} />
        
        
        
      
      
          
        <Collapse isOpen={this.state.isOpen} navbar>
      
          <Nav className="ml-auto" navbar>
      
            <span></span>
            <NavItem>
            <Signout buttonLabel="Signout" />
          </NavItem>
      
      
          </Nav>
        </Collapse>
      
      
      </Navbar>
    );
  }
}




const mapStateToProps = (user) => {

    return {
        islogin: user.user.user.logged
        //islogin:false
    };

}

export default withRouter(connect(mapStateToProps)(NavHeaderLogin));