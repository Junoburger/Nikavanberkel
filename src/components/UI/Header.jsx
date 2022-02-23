import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<nav
				className="navbar navbar-expand-md navbar-light"
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0.5rem",
					alignItems: "baseline",
				}}
			>
				<div>
					<Link to="/">
						<div className="Name">Nika van Berkel</div>
					</Link>
				</div>
				<div>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link className="About" to="/about">
									About
								</Link>
								<br />
								<span>
									More recent work on{" "}
									<a
										href="https://www.instagram.com/nikavanberkel/"
										target="_blank"
										rel="noreferrer"
									>
										Instagram
									</a>
								</span>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</nav>
		);
	}
}
