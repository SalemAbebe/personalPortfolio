import React from "react";
import "./Nav2.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Nav2() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="light"
        fixed="top"
        className="bg-color"
      >
        <Container className="bg-color">
          <Navbar.Brand href="#home">
            <NavLink to="/">
              <img src={process.env.PUBLIC_URL + "/vector.png"} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="right-aligned bg-color"
          >
            <Nav>
              {/* <Nav.Link href="#home">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </Nav.Link> */}
              <Nav.Link href="#about">
                <NavLink exact to="/about">
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#projects">
                <NavLink exact to="/projects">
                  Project
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#contact">
                <NavLink exact to="/contact">
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav2;
