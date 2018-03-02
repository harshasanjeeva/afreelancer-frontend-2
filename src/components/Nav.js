import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Route, withRouter } from 'react-router-dom';
// import text from './../images/1.svg';
// import logo from './../images/2.svg';
import Sigin from './Signin'
import Home from './Home';
import Projects from './Projects';

class NavHeader extends Component {
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
          <NavbarBrand href="/">freelancer</NavbarBrand>
          <Nav className="ml-auto" navbar>
          <NavItem>
          <NavLink href="/projects/">Hire</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/projects/">Work</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/projects/">Know More</NavLink>
          </NavItem>
          </Nav>
          
          <NavbarToggler onClick={this.toggle} />
          
          
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin/">Log-in</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/projects/">Sign-Up</NavLink>
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

export default withRouter(NavHeader);