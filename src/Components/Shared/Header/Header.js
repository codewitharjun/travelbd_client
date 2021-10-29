import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
          <Container>
              <Navbar.Brand href="#home">TravelBD</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#news">News</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                  <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                    <Button  variant="link">LogOut</Button>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Navbar.Text> <i className="fas fa-user-circle"></i> <a href="/login">Daniyel</a></Navbar.Text>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
    );
};

export default Header;