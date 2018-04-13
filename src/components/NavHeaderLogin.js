import React, { Component } from 'react';
import {Navbar, Dropdown,Nav,NavItem, Button, Collapse,  NavbarToggler, DropdownMenu, DropdownItem,DropdownToggle,UncontrolledDropdown,NavbarBrand,  NavLink } from 'reactstrap';

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

import {signout} from "../actions/useractions";
class NavHeaderLogin extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.state = {
          isOpen: false,
          isOpen1: false,
          dropdownOpen: false,
          dropdownOpen1:false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
          dropdownOpen: !this.state.dropdownOpen,
          // dropdownOpen1:!this.state.dropdownOpen1
        });
      }

      toggle1() {
        this.setState({
          isOpen1: !this.state.isOpen1,
          dropdownOpen1: !this.state.dropdownOpen1
        });
      }


      // <NavItem>
      // <NavLink href="/myprojects/">My Projects</NavLink> 
      // </NavItem>


  render() {
    return (
      <Navbar light expand="md">


      <NavbarBrand href="/">
      <img src={require('./image2.png')} width="110" height="30" alt="" />
      
      </NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink href="/projects/">Hire Freelancers</NavLink>
        </NavItem>

        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret>
        Work
      </DropdownToggle>



            <DropdownMenu>
              <DropdownItem header>Options</DropdownItem>
            
              <DropdownItem href="/work/">Work</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/currentwork/">Current Work</DropdownItem>
            </DropdownMenu>
          </Dropdown>




        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret>
        My Projects
      </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Options</DropdownItem>
            
              <DropdownItem href="/myprojects/">Projects posted</DropdownItem>

            </DropdownMenu>
          </Dropdown>





        <NavItem>
        <NavLink href="/mybids/">My Bids</NavLink>
        </NavItem>
        
        </Nav>
    
            
        <NavbarToggler onClick={this.toggle} />
        
        
      
      
          
        <Collapse isOpen={this.state.isOpen} navbar>
      
          <Nav className="ml-auto" navbar>
      
            <span></span>
            <NavItem>
            <NavLink href="/" onClick= {() => {
              this.props.signout();
            }}
            >Signout</NavLink>
            </NavItem>
          </Nav>
        </Collapse> 
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch",dispatch)
  return {
    signout : () => dispatch(signout())
  }
}


const mapStateToProps = (user) => {

    return {
        islogin: user.user.user.logged
        //islogin:false
    };

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavHeaderLogin));