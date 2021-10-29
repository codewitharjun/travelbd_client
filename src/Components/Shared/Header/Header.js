import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../../../Hooks/useFirebase";


const Header = () => {
    const {user, SignOut} = useFirebase();
    console.log(user);
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
          <Container>
              <Navbar.Brand as={HashLink} to="/home#home">TravelBD</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#news">News</Nav.Link>
                  <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                  { user?.email ? <Button className="mb-5" onClick={SignOut} variant="warning">LogOut</Button> :
                  <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                  }
                  {user?.email && <p>{user.displayName}</p>}
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
    );
};

export default Header;