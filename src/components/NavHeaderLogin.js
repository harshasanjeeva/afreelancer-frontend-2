import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
        <div>
        <Navbar color="faded" light expand="md">


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

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        
     
        </Navbar>
      </div>
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