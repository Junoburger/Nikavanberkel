import React, { Component } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Header extends Component {
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
        <nav className="navbar navbar-expand-md navbar-light">
          <div>
            <a href="/">
              <h4 className="Name">Nika Van Berkel</h4>
            </a>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="About" href="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </nav>
      </div>
    );
  }
}
