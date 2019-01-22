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
             <div>
              <a className="About" href="/about">About</a>
              </div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink className="navLine" href="/projects">Archive</NavLink>
               </NavItem>
                <NavItem>
                <NavLink className="navLine" href="/news">News</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

}
