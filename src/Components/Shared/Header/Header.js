import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";


const Header = () => {
    const {user, SignOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home" className="">TravelBD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#news">News</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                        <Nav.Link as={HashLink} to="/managepackage">ManagePackage</Nav.Link>
                        <Nav.Link as={HashLink} to="/addpackage">AddPackage</Nav.Link>
                        <Nav.Link as={HashLink} to="/cart"><i className="fas fa-shopping-cart cart-style"></i></Nav.Link>
                        { user?.email ? 
                        <Button onClick={SignOut} variant="link">LogOut</Button> :
                        <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        {user?.email && <p className="text-middle">{user.displayName}</p>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;