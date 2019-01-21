import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

}
