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
import { Route } from 'react-router-dom';
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
              <a className="About" href="/about">About</a>
              </div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Route exact path="/"  component={Welcome}></Route>  
                <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink className="navLine" href="/projects">Archive</NavLink>
               </NavItem>
                <NavItem>
                <NavLink className="navLine" href="/">Work</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

}
