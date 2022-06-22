import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../assets/css/icomoon.css';

const TopNavbar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#home">Social App</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#features">
								<span className="icon-home"> </span>
								Home
							</Nav.Link>
							<Nav.Link href="#pricing">
								<span className="icon-info"> </span>
								About
							</Nav.Link>
							<NavDropdown title="Atul Singh" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.2">
									<span className="icon-switch"> </span>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default TopNavbar;
