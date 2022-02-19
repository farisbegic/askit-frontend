import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";

const Header = () => {
    const { name, logout, accessToken } = useContext(AuthenticationContext)
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid="sm">
                <Navbar.Brand>Ask.it</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="text-secondary text-decoration-none px-2" to="/">Home</Link>
                        { !accessToken ? (
                            <>
                                <Link className="text-secondary text-decoration-none px-2" to="/register">Register</Link>
                                <Link className="text-secondary text-decoration-none px-2" to="/login">Login</Link>
                            </>
                        ) : (
                            <>
                                <Link className="text-secondary text-decoration-none px-2" to="/profile">{name}</Link>
                                <Link className="text-secondary text-decoration-none px-2" to="/" onClick={() => logout()}>Logout</Link>
                            </>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;