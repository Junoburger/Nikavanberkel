import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Welcome } from './../Main/Welcome';


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
              <a className="About" href="/"><Welcome/></a>
              </div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                
                <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink className="navLine" href="/projects">Archive</NavLink>
               </NavItem>
                <NavItem>
                <NavLink className="navLine" href="/about">About</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

}
