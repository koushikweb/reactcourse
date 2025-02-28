import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import Routers from "./Routes";

const Mainmenu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/dashboard">
            Dashboard
          </Navbar.Brand>
          <Nav Link as={Link} to="/about">
            About
          </Nav>
          <Nav Link as={Link} to="/contact">
            Contact
          </Nav>
        </Container>
      </Navbar>
      <Routers />
    </div>
  );
};

export default Mainmenu;
