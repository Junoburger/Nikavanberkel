import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Header extends Component{
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
render(){
    return(

        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> <h2 className="my-0 mr-md-auto font-weight-normal Name">Nika <small className="text-muted">van Berkel</small></h2></NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navLine" href="/bio">Bio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLine" href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLine" href="/news">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLine" href="/contact">Contact</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret  className="p-2 h5 text-grey">
                  Options
                </DropdownToggle>
                <DropdownMenu right>
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
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

}
