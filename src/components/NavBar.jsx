import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="bg"
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="">
          <img
            width="50px"
            height="auto"
            className="img-responsive"
            src={require("../Images/TokenLocker.png")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="navlink" to="/">
              Home
            </Link>

            <Link className="navlink" to="/RoadMap">
              Roadmap
            </Link>

            <Link className="navlink" to="/Contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
