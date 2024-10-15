// src/components/Navbar.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function BasicExample() {
  // State to track if the user is signed in
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your authentication logic

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./assets/images/output-onlinepngtools.png"
            alt="Logo"
            width="100"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {isLoggedIn && ( // Only show the dropdown if the user is logged in
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/add">Add</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Delete</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Edit</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Report</NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link as={Link} to="/signin">
              <Button variant="outline-light">Sign In</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-light">Log In</Button>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
            />
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
